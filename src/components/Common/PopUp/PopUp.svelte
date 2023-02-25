<script>
  import Modal from './Modal.svelte';
  let showModal = true;

  const toggleModal = () => {
    showModal = !showModal;
  };

  export let popUp;
</script>

{#if showModal}
  <Modal on:close={() => (showModal = false)} {popUp} {toggleModal} />
{/if}
