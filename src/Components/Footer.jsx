import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import logo from "./Navbar/logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function Footer() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <div className="sm:px-[315px] px-2 mt-10">
        <div className="">
          <p className="text-[#FFB077]">OUR PROJECT</p>
          <h2 className="text-6xl">Meet With Our Team</h2>
        </div>
        <img src={img9} alt="" className="py-10" />
        <ul>
          <li className="border-b-2 border-[#42454D] py-2 text-xl">
            Cody Fisher - CEO
          </li>
          <li className="border-b-2 border-[#42454D] py-2 text-xl">
            Savannah Nguyen - Interior architect
          </li>
          <li className="border-b-2 border-[#42454D] py-2 text-xl">
            Jerome Bell - Interior
          </li>
          <li className="border-b-2 border-[#42454D] py-2 text-xl">
            Cameron Williamson - architect
          </li>
          <li className="py-2 text-xl">Marvin McKinney - COnstruction head</li>
        </ul>
      </div>
      <footer className="sm:px-[56px] px-0 sm:pl-0 pl-5">
        <div className="md:hidden mt-12 px-5 py-20">
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
              <img src={img1} alt="" className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="" className="w-full h-auto rounded-lg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="sm:flex hidden w-auto py-20 px-1">
          <img src={img1} alt="" className="w-[216px]" />
          <img src={img2} alt="" className="w-[216px]" />
          <img src={img3} alt="" className="w-[216px]" />
          <img src={img4} alt="" className="w-[216px]" />
          <img src={img5} alt="" className="w-[216px]" />
          <img src={img6} alt="" className="w-[216px]" />
          <img src={img7} alt="" className="w-[216px]" />
        </div>
        <div className="sm:flex justify-between sm:px-20 px-0 items-center pb-10">
          <div>
            <a href="/">
              <img src={logo} alt="" className="w-40 pb-4" />
            </a>
            <p>
              Take a look at how we designed this <br />
              housesimply random text. It has roots in a piece <br />
              of classical Latin literature from 45 BC, making it <br />
              over 2000 years old.
            </p>
          </div>
          <img src={img8} alt="" className="sm:block hidden" />
          <ul className="gap-y-5 sm:block hidden">
            <li className="cursor-pointer text-[#FFB077] pb-2">THE STUDIO</li>
            <li className="cursor-pointer pb-2">pROJECTS</li>
            <li className="cursor-pointer pb-2">architecture</li>
            <li className="cursor-pointer pb-2">Blog</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <img src={img8} alt="" className="sm:block hidden" />
          <div>
            <div className="sm:block hidden">
              <h3 className="text-4xl pb-2">Visit</h3>
              <p className="pb-5">
                Logan Barker, 865 Oak Boulevard, <br />
                Elk Grove, Vermont 95184
              </p>
              <h3 className="text-4xl pb-2">Call</h3>
              <p>017-6153-1774</p>
            </div>
            <div className="flex sm:hidden gap-5 pt-10 items-center">
              <ul className="gap-y-5">
                <li className="cursor-pointer text-[#FFB077] pb-2">
                  THE STUDIO
                </li>
                <li className="cursor-pointer pb-2">pROJECTS</li>
                <li className="cursor-pointer pb-2">architecture</li>
                <li className="cursor-pointer pb-2">Blog</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
              <div>
                <h3 className="text-4xl pb-2">Visit</h3>
                <p className="pb-5">
                  Logan Barker, 865 Oak Boulevard, <br />
                  Elk Grove, Vermont 95184
                </p>
                <h3 className="text-4xl pb-2">Call</h3>
                <p>017-6153-1774</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
