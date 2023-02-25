<script>
  import ModalSlider from './ModalSlider.svelte';
  export let gallery;

  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal;
  };
</script>

<section>
  <div class="grid grid-cols-4">
    {#each gallery as img, i}
      <div on:click={toggleModal} on:keypress={toggleModal} class="relative">
        <div
          class="absolute z-10 h-full w-full bg-white opacity-0 hover:opacity-50 transition--opacity duration-300 cursor-pointer "
        />
        <img
          src={img.sourceUrl}
          alt={img.altText}
          width={500}
          position="center "
          loading="lazy"
          class="aspect-square cursor-pointer object-cover"
        />
      </div>
    {/each}
  </div>

  {#if showModal}
    <ModalSlider
      client:idle
      images={gallery}
      on:close={() => (showModal = false)}
    />
  {/if}
</section>
