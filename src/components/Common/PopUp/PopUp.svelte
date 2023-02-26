<script>
  import Modal from './Modal.svelte';

  const toggleModal = () => {
    showModal = !showModal;
  };
  export let popUp;

  let showModal = false;

  //POP UP LOGIC
  setTimeout(() => {
    let viewedSite = localStorage.getItem('visited');
    const today = new Date().getTime();
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;

    if (!viewedSite) {
      showModal = true;
      const expirationDate = new Date().getTime() + thirtyDays;
      localStorage.setItem('visited', true + ' ' + expirationDate);
      viewedSite = localStorage.getItem('visited');
    }

    const viewedSiteParts = viewedSite.split(' ');
    const expirationTime = parseInt(viewedSiteParts[1]);

    if (viewedSite && today > expirationTime) {
      showModal = true;
      localStorage.setItem('visited', false + ' ' + (today + thirtyDays));
    }
  }, 5000);
</script>

{#if showModal}
  <Modal on:close={() => (showModal = false)} {popUp} {toggleModal} />
{/if}
