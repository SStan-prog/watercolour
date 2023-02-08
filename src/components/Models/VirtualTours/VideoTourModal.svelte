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

  export let videoTourLink;
</script>

<svelte:window on:keydown={handle_keydown} />
<div
  class="fixed  top-0 left-0 w-full h-full bg-black-100 bg-opacity-70 cursor-zoom-out"
  on:click={close}
  on:keydown={handle_keydown}
/>

<div
  role="dialog"
  aria-modal="true"
  bind:this={modal}
  class=" w-[95vw] md:w-[80vw] z-10 h-auto fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
>
  <iframe src={videoTourLink} class="w-full aspect-video" title="Model Tour" />

  <button
    on:click={close}
    class="flex items-center justify-center w-10 sm:w-14 h-10 sm:h-14 text-3xl absolute -top-10 right-0 z-50 rounded-full bg-yellow"
    ><div class="absolute h-6 sm:h-10 w-1  bg-black-400 rotate-45 " />
    <div class="absolute h-6 sm:h-10 w-1  bg-black-400 -rotate-45 " />
  </button>
</div>
