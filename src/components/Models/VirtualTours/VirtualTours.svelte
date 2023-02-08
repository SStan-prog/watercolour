<script>
  import Tour from './Tour.svelte';
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
    <div
      class="flex flex-wrap justify-center gap-20 py-20 px-5 max-w-[1600px] mx-auto"
    >
      {#each virtualTours.models as m, i}
        <Tour
          key={m.name}
          image={m.image}
          name={m.name}
          videoTourLink={m.videoTourLink}
          virtualTourLink={m.virtualTourLink}
        />
      {/each}
    </div>
  </div>
</section>
