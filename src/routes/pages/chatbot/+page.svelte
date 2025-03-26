<script>
  import { groqy } from '$lib/groq-client'; // Assume previous code is in groq-client.js
  import Nav from '$lib/component/landing/Nav.svelte';
  
  let userInput = '';
  let messages = [];
  let isLoading = false;
  let error = null;
  let uploadedImage = null; // To store the uploaded image

  async function handleSubmit() {
    if (!userInput.trim() && !uploadedImage) return; // Ensure either text or image is provided

    isLoading = true;
    error = null;

    try {
      // Add user message
      if (userInput.trim()) {
        messages = [...messages, { type: 'user', content: userInput }];
      }

      if (uploadedImage) {
        messages = [...messages, { type: 'user', content: '[Image uploaded]' }];
      }

      // Get AI response
      const response = await groqy(userInput, uploadedImage);

      // Add bot message
      messages = [...messages, { type: 'bot', content: response }];
    } catch (err) {
      error = 'Failed to get response. Please try again.';
      console.error(err);
    } finally {
      isLoading = false;
      userInput = '';
      uploadedImage = null; // Reset the uploaded image after submission
    }
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        uploadedImage = reader.result; // Store the base64-encoded image
      };
      reader.readAsDataURL(file);
    }
  }
</script>

<Nav />
<div class="max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-gray-100 rounded-lg shadow-lg  bg-opacity-10">
  <h1 class="text-2xl sm:text-3xl font-bold text-center text-white mb-4 sm:mb-6">
    Appliance Repair Assistant
  </h1>

  <div class="bg-gray-100 rounded-lg p-3 sm:p-4 h-80 sm:h-96 overflow-y-auto shadow-md mb-4 sm:mb-6 bg-opacity-60">
    {#each messages as message}
      <div class="mb-3 sm:mb-4 flex flex-col">
        {#if message.type === 'user'}
          <div class="bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg self-end max-w-[80%] sm:max-w-[70%] shadow-md">
            <strong>You:</strong>
            <p>{message.content}</p>
          </div>
        {:else}
          <div class="bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 rounded-lg self-start max-w-[80%] sm:max-w-[70%] shadow-md">
            <strong>Assistant:</strong>
            <div class="whitespace-pre-wrap">
              {@html message.content.replace(/\n/g, '<br>')}
            </div>
          </div>
        {/if}
      </div>
    {/each}

    {#if isLoading}
      <div class="flex items-center gap-2 text-gray-500">
        <div class="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <span class="text-sm sm:text-base">Analyzing your appliance issue...</span>
      </div>
    {/if}

    {#if error}
      <div class="text-red-600 bg-red-100 p-2 sm:p-3 rounded-lg mt-3 sm:mt-4">{error}</div>
    {/if}
  </div>

  <form on:submit|preventDefault={handleSubmit} class="flex flex-col sm:flex-row gap-3 sm:gap-4">
    <input
      type="text"
      bind:value={userInput}
      placeholder="Describe your appliance problem..."
      class="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-full text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      disabled={isLoading}
    />
    <input
      type="file"
      accept="image/*"
      on:change={handleImageUpload}
      class="file-input border border-gray-300 rounded-full px-3 py-2 text-sm text-gray-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      disabled={isLoading}
    />
    <button
      type="submit"
      class="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
      disabled={isLoading}
    >
      {isLoading ? 'Sending...' : 'Send'}
    </button>
  </form>
</div>

<style>
  .file-input {
    flex: 1;
    cursor: pointer;
  }
</style>