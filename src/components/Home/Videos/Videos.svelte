<script>
  import { Navigation, Pagination } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/svelte';

  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  export let videos;
</script>

<section class="bg-green  py-20 pb-32 px-5">
  <div class="flex flex-col items-center text-center text-white ">
    <div class="mb-10">
      <h2 class="font-heading font-bold text-3xl sm:text-5xl mb-5 text-white">
        {videos.homeVideosSectionText.videosheading}
      </h2>
      <p class="text-2xl">{videos.homeVideosSectionText.body}</p>
    </div>
    <div class="max-w-[1000px] aspect-video w-full ">
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
      >
        {#each videos as video}
          {console.log(video)}
          <SwiperSlide class="pb-12">
            <iframe
              src={`${video.video}?rel=0`}
              class="w-full h-full aspect-video "
              loading="lazy"
              title="video"
            />
          </SwiperSlide>
        {/each}
      </Swiper>
    </div>
  </div>
</section>
