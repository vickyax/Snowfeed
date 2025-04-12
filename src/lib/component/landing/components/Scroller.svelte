<script>
  import { onMount } from 'svelte';
  import Card from './Card2.svelte';
  onMount(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      window.scrollTo({
        left: window.scrollX + (e.deltaY * 1.5),
        behavior: 'smooth'
      });
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', (e) => e.preventDefault());

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  });
</script>

<style>
  #filler {
    overflow: auto;
  white-space: nowrap;
    
  }
  #container {
    width: 3900px;
    margin-top: -150px;
    position: relative;
    overflow-x: scroll;
  }
  
  .section {
    display: flex;
    width: 300px;
    height: 300px;
    float: left;
    margin-left: 20px;
    opacity: 0.6;
    border-radius: 6px;
  }
  .clear {
    clear: both;
  }
  
  .blue {
    background-color: #06f;
  }
  .green {
    background-color: #0f9d00;
  }
  .red {
    background-color: #f00;
  }
  .yellow {
    background-color: #ffea00;
  }
</style>

<div id="filler" class="my-5">
  <div id="container">
       
    <Card  image={"laptop.jpg"} content1={"Laptop and PC"} content2={"Screen replacement,Virus removal"} />

    <Card image={"acimage.jpg"} content1={"Air Conditioning Repair"} content2={"Gas refill, compressor failure issues"} />

    <Card image={"fridge.png"} content1={"Refrigerator Emergency Care"} content2={"Cooling failure, frost buildup, door seal leaks"} />

    <Card image={"smarttv.png"} content1={"TV, Smart Tv Repair"} content2={"flickering screens, audio delays"} />

    <Card image={"washingmachine.png"} content1={"Washing Machine Repair"} content2={"Draining problems Washer not turning on"} />

    <Card image={"wifi.png"} content1={"Wifi Router"} content2={"slow connection, frequent drops, Overheating"} />
  </div>
</div>