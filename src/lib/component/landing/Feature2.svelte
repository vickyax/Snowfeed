<script>
    import { t } from "$lib/i18n";
  </script>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800  font-bold leading-none mb-3">
            {$t("slogan4")}
          </h3>
            
            <button
            class="flex  text-center justfy-center items-center mx-auto lg:mx-0  bg-green-700 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-110 duration-300 ease-in-out"
            >
            Book a Call
        </button>
        <h1 class="text-gray-800 mb-8 text-2xl text">
            <br/>We ensure you get your devices fixed at the most affordable Price.
            </h1>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img class="w-full object-cover" src=".\pic2.jpg" alt="hero" />
        </div>
      </div>
      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <img class="w-full object-cover " src="pic1.jpg" alt="hero" />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Explore Our services to find what you need 
            </h3>
            <p class="text-gray-600 mb-8">
              {$t("treg")}
              <br />
              <br />
             
                {$t("info")}
              <a class="text-pink-500 underline" href="https://">{$t("link")}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>