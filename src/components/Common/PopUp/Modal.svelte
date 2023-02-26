<script>
  import Form from './Form.svelte';
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

  export let popUp;
  export let toggleModal;
</script>

<svelte:window on:keydown={handle_keydown} />
<div class="fixed z-[999] top-0 left-0 w-full h-full " on:click={close} />

<div
  role="dialog"
  aria-modal="true"
  bind:this={modal}
  class=" w-full px-5 max-w-[550px] z-[999] h-auto fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "
>
  <div class="rounded-xl relative shadow-3xl">
    <button
      on:click={close}
      class="flex items-center justify-center  w-10 h-10 text-xl sm:text-3xl bg-red top-3 right-3 z-50 rounded-full absolute"
    >
      <img
        src="/icons/close.svg"
        alt="close"
        class="transition-opacity h-[30px] w-[30px]"
      />
    </button>
    <img
      src={popUp.image.sourceUrl}
      alt={popUp.image.altText}
      class="aspect-16/9 rounded-t-xl object-cover "
    />
    <div
      class="p-3 sm:p-6 bg-white w-full flex flex-col items-center rounded-b-xl"
    >
      <span class="block text-xl sm:text-3xl font-bold text-center mb-2"
        >{popUp.heading}</span
      >
      <p class="text-base sm:text-lg text-center max-w-[500px] mb-10">
        {popUp.bodyText}
      </p>
      <div class="w-full mb-2 flex flex-col items-center">
        <Form buttonText={popUp.buttonText} {toggleModal} />
      </div>
    </div>
  </div>
</div>
