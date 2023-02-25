<script>
  import { createEventDispatcher, onDestroy } from 'svelte';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  let modal;

  const handle_keydown = (e) => {
    if (e.key === 'Escape') {
      close();
      return;
    }

    if (e.key === 'Tab') {
      // trap focus
      const nodes = modal.querySelectorAll('*');
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused =
    typeof document !== 'undefined' && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }

  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Navigation, Thumbs } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/navigation';

  export let images;
</script>

<svelte:window on:keydown={handle_keydown} />
<div
  class="fixed z-10 top-0 left-0 w-full h-full bg-black-100 bg-opacity-70 cursor-zoom-out"
  on:click={close}
/>

<div
  role="dialog"
  aria-modal="true"
  bind:this={modal}
  class="modal-model-slider w-[95vw] md:w-[80vw] z-10 h-auto fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
>
  <Swiper modules={[Navigation, Thumbs]} navigation loop={true}>
    {#each images as image, i}
      <SwiperSlide class="m-auto">
        <div class="w-full  mx-auto">
          <img
            src={image.sourceUrl}
            alt={image.altText}
            loading="lazy"
            class="w-full h-auto  object-contain lg:aspect-video"
          />
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</div>

<button
  on:click={close}
  class="flex items-center justify-center w-10 sm:w-14 h-10 sm:h-14 text-3xl fixed top-1 right-1 z-50 rounded-full group"
>
  <img
    src="/icons/close.svg"
    alt="close"
    class="transition-opacity opacity-50 group-hover:opacity-100 h-[50px] w-[50px]"
  />
</button>
