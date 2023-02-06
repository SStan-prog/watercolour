<script>
  import ModalSlider from './ModalSlider.svelte';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Navigation, Pagination } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  export let images;

  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal;
  };
</script>

<div class="model-slider ">
  <Swiper
    pagination={{ clickable: true }}
    modules={[Pagination, Navigation]}
    navigation
    loop={true}
    allowTouchMove={false}
  >
    {#each images as image, i}
      <SwiperSlide>
        <div
          class="w-full  mx-auto"
          on:click={toggleModal}
          on:keypress={toggleModal}
        >
          <img
            src={image.sourceUrl}
            alt={image.altText}
            loading="lazy"
            class="w-full h-auto aspect-video object-contain"
          />
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>

  {#if showModal}
    <ModalSlider on:close={() => (showModal = false)} {images} />
  {/if}
</div>
