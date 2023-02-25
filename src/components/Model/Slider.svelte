<script>
  import ModalSlider from './ModalSlider.svelte';
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Navigation, Pagination, Thumbs } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  export let images;

  let showModal = false;

  const toggleModal = () => {
    showModal = !showModal;
  };

  // store Thumbs swiper instance
  let thumbsSwiper = null;

  const setThumbsSwiper = (e) => {
    const [swiper] = e.detail;
    // set Thumbs swiper instance
    setTimeout(() => {
      thumbsSwiper = swiper;
    });
  };
</script>

<div class="model-slider ">
  <Swiper
    pagination={{ clickable: true }}
    modules={[Pagination, Navigation, Thumbs]}
    navigation
    loop={true}
    allowTouchMove={false}
    on:swiper={setThumbsSwiper}
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
    <ModalSlider on:close={() => (showModal = false)} {images} {thumbsSwiper} />
  {/if}
</div>
