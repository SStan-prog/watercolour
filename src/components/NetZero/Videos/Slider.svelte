<script>
  import { Swiper, SwiperSlide } from 'swiper/svelte';
  import { Navigation, Pagination } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  export let videos;
</script>

<div class="model-slider">
  <Swiper
    slidesPerView={1}
    modules={[Pagination, Navigation]}
    pagination={{ clickable: true }}
    navigation
  >
    {#each videos as video, i}
      <SwiperSlide class="pb-12 ">
        <div class="w-full mx-auto">
          <iframe
            src={`${video.videoEmbedLink}?rel=0`}
            class="w-full h-auto aspect-video "
            loading="lazy"
            title="Net Zero video"
          />
        </div>
      </SwiperSlide>
    {/each}
  </Swiper>
</div>
