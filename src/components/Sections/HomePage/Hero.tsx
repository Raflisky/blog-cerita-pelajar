import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";

import Container from '@/components/Layout/Container';
import Button from "@/components/Button";

export const Hero = () => {
  return (
    <>
      <header>
        <Swiper
          rewind={true}
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="custom-slider swiper-pagination-bullet-active"
        >
          <SwiperSlide>
            <article style={{ backgroundImage: `url('/static/images/slider/hero-slider1.jpg')` }} className='w-full h-[800px] object-cover bg-center flex flex-col justify-center'>
              <Container>
                <div className="pl-8 border-l-4 border-white lg:w-8/12">
                  <h2 className="text-5xl font-bold text-white leading-[60px]">pernah Ditawar Rp 2 Miliar, Begini Kondisi Rumah Abah Jajang Terkini Setelah Viral dan Ramai Pengunjung</h2>
                  <p className="mt-3 tracking-wider text-white mb-7">Seperti diketahui, rumah Abah Jajang viral karena memiliki pemandangan air terjun dan sawah yang indah.</p>
                  <Button variant="outline" url="/" text="Baca Selengkapnya" className="inline-flex font-medium text-white border-white" />
                </div>
              </Container>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article style={{ backgroundImage: `url('/static/images/slider/hero-slider3.webp')` }} className='w-full h-[800px] object-cover bg-center'>
            </article>
          </SwiperSlide>
        </Swiper>
      </header >
    </>
  )
}
