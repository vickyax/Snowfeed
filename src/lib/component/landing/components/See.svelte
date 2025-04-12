<script>
    import Card from './Cards3.svelte'; // Assuming Card is a separate component

    // Sample data for the cards
    const cards = [
        { image: "laptop.jpg", content1: "Laptop and PC", content2: "Screen replacement, Virus removal" },
        { image: "acimage.jpg", content1: "Air Conditioning Repair", content2: "Gas refill, compressor failure issues" },
        { image: "fridge.png", content1: "Refrigerator Emergency Care", content2: "Cooling failure, frost buildup, door seal leaks" },
        { image: "smarttv.png", content1: "TV, Smart Tv Repair", content2: "flickering screens, audio delays" },
        { image: "washingmachine.png", content1: "Washing Machine Repair", content2: "Draining problems, Washer not turning on" },
        { image: "wifi.png", content1: "Wifi Router", content2: "slow connection, frequent drops, Overheating" }
    ];

    let searchTerm = '';
    let filteredCards = cards;
    let showSuggestions = false; // Control visibility of suggestions

    // Function to filter cards based on the search term
    function filterCards() {
        filteredCards = cards.filter(card => 
            card.content1.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.content2.toLowerCase().includes(searchTerm.toLowerCase())
        );
        showSuggestions = searchTerm.length > 0 && filteredCards.length > 0; // Show suggestions if there's input
    }

    // Function to handle card click
    function selectCard(card) {
        searchTerm = card.content1; // Or any other action you want to perform
        showSuggestions = false; // Hide suggestions after selection
    }
</script>

<style>
    .search-container {
        position: absolute; /* Position it absolutely */
        z-index: 2;
    }
    .suggestions {
        display: flex;
        flex-wrap: wrap;
        margin-top: 5px; /* Add margin to avoid overlap with the search box */
        position: absolute; /* Position suggestions as an overlay */
        background: white; /* Background color for the overlay */
        border: 1px solid #ccc; /* Border for the suggestions */
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Shadow for depth */
        z-index: 10; /* Ensure it appears above other elements */
        width: 300px; /* Match the width of the input */
    }
    .suggestion-card {
        cursor: pointer; /* Pointer cursor for clickable items */
        padding: 10px; /* Padding for each suggestion */
        transition: background 0.2s; /* Smooth background transition */
    }
    .suggestion-card:hover {
        background: #f0f0f0; /* Highlight on hover */
    }
</style>

<div class="search-container relative mt-12 lg:mt-8 md:mt-15 sm:mt-16 right-5">
    <input class="w-[300px] mt-2 lg:mt-0 sm:mt-2 border  border-gray-300 rounded-lg p-2 text-black"
        type="text" 
        placeholder="Search" 
        bind:value={searchTerm} 
        on:input={filterCards} 
    />
    {#if showSuggestions}
        <div class="suggestions">
            {#each filteredCards as card}
                <button 
                    type="button" 
                    class="suggestion-card" 
                    on:input={() => selectCard(card)} 
                    on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectCard(card); }} 
                    aria-label={`Select ${card.content1}`}
                >
                    <Card 
                        image={card.image} 
                        content1={card.content1} 
                        content2={card.content2} 
                    />
                </button>
            {/each}
        </div>
    {/if}
</div>