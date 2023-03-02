import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Videos {
  homeVideosSectionText: object;
  body: string;
  videos: [];
}

interface Video {
  video: string;
}

const Videos = ({ videos }: any) => {
  return (
    <section className="bg-green  py-20 px-5 pb-32">
      <div className="flex flex-col items-center text-center text-white ">
        <div className="mb-10">
          <h2 className="mb-5 font-heading text-3xl font-bold text-white sm:text-5xl">
            {videos.homeVideosSectionText.videosheading}
          </h2>
          <p className="text-2xl">{videos.homeVideosSectionText.body}</p>
        </div>
        <div className="aspect-video w-full max-w-[1000px] ">
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
          >
            {videos.videos.map((video: Video, i: number) => {
              return (
                <SwiperSlide className="pb-12" key={i}>
                  <iframe
                    src={`${video.video}?rel=0`}
                    className="aspect-video h-full w-full "
                    loading="lazy"
                    title="Youtube"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Videos;
