<script>
  import VideoTourModal from './VideoTourModal.svelte';
  import VirtualTourModal from './VirtualTourModal.svelte';
  let showVideoModal = false;
  let showVirtualModal = false;

  const toggleVideoModal = () => {
    showVideoModal = !showVideoModal;
  };

  const toggleVirtualModal = () => {
    showVirtualModal = !showVirtualModal;
  };

  export let image;
  export let name;
  export let virtualTourLink;
  export let videoTourLink;
</script>

<div class="flex w-[400px] flex-col items-center">
  <img
    src={image.sourceUrl}
    alt={image.altText}
    width={400}
    loading="lazy"
    class="mx-auto mb-5 sm:mb-10 aspect-4/3 object-cover rounded-md"
  />
  <h3 class="mb-5 text-xl sm:text-3xl text-center">{name}</h3>
  <div class="flex flex-wrap justify-center gap-5">
    {#if virtualTourLink}
      <button
        on:click={toggleVirtualModal}
        class="bg-red bold border-red  hover:text-red cursor-pointer  border-2 text-center text-white transition duration-100 ease-linear hover:bg-transparent rounded-xl px-4 py-2 text-xl sm:px-5 sm:py-3 sm:text-2xl"
      >
        View Virtual Tour
      </button>
    {/if}
    {#if videoTourLink}
      <button
        on:click={toggleVideoModal}
        class="bg-red bold border-red  hover:text-red cursor-pointer  border-2 text-center text-white transition duration-100 ease-linear hover:bg-transparent rounded-xl px-4 py-2 text-xl sm:px-5 sm:py-3 sm:text-2xl"
        >View Video Tour</button
      >
    {/if}
  </div>

  {#if showVideoModal === true}
    <VideoTourModal on:close={() => (showVideoModal = false)} {videoTourLink} />
  {/if}

  {#if showVirtualModal === true}
    <VirtualTourModal
      on:close={() => (showVirtualModal = false)}
      {virtualTourLink}
    />
  {/if}
</div>
