import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import img from './img.svg';
import img2 from './img2.svg';
import img3 from './img3.svg';
import img4 from './img4.svg';

const HeroImages = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <div className="container mx-auto px-5 text-center">
                <p className="mt-36 font-medium text-lg leading-[21px] tracking-[0.3em] text-[#ffc978]">
                    TOP SERVICES
                </p>
                <h3 className="mt-3 font-regular text-[60px] leading-[77px] text-white">
                    Our Specializations
                </h3>
            </div>

            <div className="hidden md:flex justify-center items-center gap-5 mt-12 relative -top-36">
                <img src={img} alt="" className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg" />
                <div className="flex items-center relative top-28">
                    <img src={img2} alt="" className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg" />
                    <img src={img3} alt="" className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg ml-5" />
                </div>
                <img src={img4} alt="" className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg" />
            </div>

            <div className="md:hidden mt-12 px-5">
                <Swiper
                    pagination={pagination}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={img} alt="" className="w-full h-auto rounded-lg" /> </SwiperSlide>
                    <SwiperSlide> <img src={img2} alt="" className="w-full h-auto rounded-lg" /> </SwiperSlide>
                    <SwiperSlide> <img src={img3} alt="" className="w-full h-auto rounded-lg" /> </SwiperSlide>
                    <SwiperSlide> <img src={img4} alt="" className="w-full h-auto rounded-lg" /> </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default HeroImages;
