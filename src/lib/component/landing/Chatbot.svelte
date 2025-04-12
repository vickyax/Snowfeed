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
<div class="max-w-lg mx-auto mt-2 p-4 bg-blue-800 rounded-xl shadow-md bg-opacity-10">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-20 h-20  rounded-full flex items-center justify-center text-white font-bold"><img src="chatlogo3.png" alt="chatbot"></div>
    <h1 class="text-xl font-bold text-gray-800">Appliance Repair Assistant</h1>
  </div>

  <!-- Chat messages container -->
  <div class="bg-gray-50 rounded-lg p-3 h-64 overflow-y-auto mb-4 border border-gray-200">
    {#each messages as message}
      <div class="mb-2 flex flex-col">
        {#if message.type === 'user'}
          <div class="bg-blue-100 text-blue-900 px-3 py-2 rounded-lg self-end max-w-[85%] rounded-br-none shadow-sm">
            <p class="text-sm">{message.content}</p>
          </div>
        {:else}
          <div class="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg self-start max-w-[85%] rounded-bl-none shadow-sm">
            <div class="whitespace-pre-wrap text-sm">
              {@html message.content.replace(/\n/g, '<br>')}
            </div>
          </div>
        {/if}
      </div>
    {/each}

    {#if isLoading}
      <div class="flex items-center gap-2 text-gray-600 text-sm">
        <div class="w-3 h-3 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <span>Analyzing your appliance issue...</span>
      </div>
    {/if}

    {#if error}
      <div class="text-red-600 bg-red-50 p-2 rounded-lg text-sm">{error}</div>
    {/if}
  </div>

  <!-- Input area -->
  <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-2">
    <div class="flex gap-2 text-gray-800">
      <input
        type="text"
        bind:value={userInput}
        placeholder="Describe your appliance problem..."
        class="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        disabled={isLoading}
      />
      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading ? '...' : 'Send'}
      </button>
    </div>
    <label class="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
      <input
        type="file"
        accept="image/*"
        on:change={handleImageUpload}
        class="hidden"
        disabled={isLoading}
      />
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Attach image
    </label>
  </form>
</div>
<style>
  .file-input {
    flex: 1;
    cursor: pointer;
  }
</style>