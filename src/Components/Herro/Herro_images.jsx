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
                <h3 className="mt-3 font-regular text-[60px] leading-[77px] text-white sm:text-[50px] xs:text-[40px]">
                    Our Specializations
                </h3>
            </div>

            <div className="hidden md:flex justify-center items-center gap-5 mt-12 relative -top-36">
                <div
                    style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                    className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg"
                >
                    <div className='relative top-[400px] left-5'>
                        <h3 className='font-semibold text-2xl'>Floor plan</h3>
                        <p>Tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="flex items-center relative top-28">
                    <div
                        style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                        className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg"
                    >
                        <div className='relative top-[400px] left-5'>
                            <h3 className='font-semibold text-2xl'>Interior Design</h3>
                            <p>Tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                        className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg ml-5"
                    >
                        <div className='relative top-[400px] left-5'>
                            <h3 className='font-semibold text-2xl'>Architecture Design</h3>
                            <p>Tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                    className="w-[300px] h-[500px] object-cover rounded-lg shadow-lg"
                >
                    <div className='relative top-[400px] left-5'>
                        <h3 className='font-semibold text-2xl'>Construction</h3>
                        <p>Tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

            <div className="lg:hidden mt-12 px-5">
                <div>
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
                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                className="w-full h-[400px] flex justify-center items-center rounded-lg shadow-lg"
                            >
                                <div className="relative text-center text-white px-5 py-5 w-full bg-black bg-opacity-50 rounded-lg">
                                    <h3 className="font-semibold text-3xl">Floor plan</h3>
                                    <p>Tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${img2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                className="w-full h-[400px] flex justify-center items-center rounded-lg shadow-lg"
                            >
                                <div className="relative text-center text-white px-5 py-5 w-full bg-black bg-opacity-50 rounded-lg">
                                    <h3 className="font-semibold text-3xl">Interior Design</h3>
                                    <p>Tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${img3})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                className="w-full h-[400px] flex justify-center items-center rounded-lg shadow-lg"
                            >
                                <div className="relative text-center text-white px-5 py-5 w-full bg-black bg-opacity-50 rounded-lg">
                                    <h3 className="font-semibold text-3xl">Architecture Design</h3>
                                    <p>Tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                style={{
                                    backgroundImage: `url(${img4})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                className="w-full h-[400px] flex justify-center items-center rounded-lg shadow-lg"
                            >
                                <div className="relative text-center text-white px-5 py-5 w-full bg-black bg-opacity-50 rounded-lg">
                                    <h3 className="font-semibold text-3xl">Construction</h3>
                                    <p>Tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default HeroImages;
