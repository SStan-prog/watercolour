import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Videos = ({ videos }: any) => {
  return (
    <section className="bg-green  py-20 pb-32 px-5">
      <div className="flex flex-col items-center text-center  ">
        <div className="mb-10">
          <h2 className="font-heading font-bold text-3xl sm:text-5xl mb-5 text-white">
            {videos.heading}
          </h2>
        </div>
        <div className="max-w-[1000px] aspect-video w-full ">
          <Swiper
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation
          >
            {videos.videos.map((video: any) => {
              return (
                <SwiperSlide className="pb-12">
                  <iframe
                    src={`${video.videoEmbedLink}?rel=0`}
                    className="w-full h-full aspect-video "
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
