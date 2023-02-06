<script>
  export let virtualTours;
</script>

<section class="bg-grey-100">
  <div class="mx-auto">
    <div class="w-full bg-green">
      <h2
        class="p-8 text-center font-heading text-2xl font-bold text-white sm:text-3xl"
      >
        {virtualTours.heading}
      </h2>
    </div>
    <div class="flex flex-wrap justify-center gap-20 py-20">
      {#each virtualTours.models as m, i}
        <div class="flex w-[400px] flex-col items-center">
          <img
            src={m.image.sourceUrl}
            alt={m.image.altText}
            width={400}
            loading="lazy"
            class="mx-auto mb-10 aspect-video"
          />
          <h3 class="mb-5 text-3xl">{m.name}</h3>
          <div class="flex flex-wrap justify-center gap-5">
            {#if m.virtualTourLink}
              <a
                href={m.virtualTourLink}
                class="bg-red bold border-red  hover:text-red cursor-pointer  border-2 text-center text-white transition duration-100 ease-linear hover:bg-transparent rounded-xl px-4 py-2 text-xl sm:px-5 sm:py-3 sm:text-2xl"
              >
                View 3d Tour
              </a>
            {/if}
            {#if m.videoTourLink}
              <a
                href={m.videoTourLink}
                class="bg-red bold border-red  hover:text-red cursor-pointer  border-2 text-center text-white transition duration-100 ease-linear hover:bg-transparent rounded-xl px-4 py-2 text-xl sm:px-5 sm:py-3 sm:text-2xl"
                >View Video Tour</a
              >
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
