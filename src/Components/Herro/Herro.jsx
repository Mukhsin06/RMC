import React from 'react';
import bg from './herrrobg.svg';
import Herro_images from './Herro_images';

const Herro = () => {
  return (
    <section id="herro" className="bg-[#181b23]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5 min-h-screen">
        {/* Text Section */}
        <div className="herro_txt text-left w-full md:w-1/2">
          <span className="text-[#FFC978] font-medium text-sm tracking-[0.3em] leading-6">Architecture design</span>
          <h3 className="text-white font-['Larken-Regular'] text-[40px] md:text-[64px] mt-5 uppercase leading-[40px] md:leading-[54px]">
            Professional <br />
            Interior Design
          </h3>
          <p className="text-[#ABAEB7] font-['Roboto'] text-base md:text-xl mt-5 leading-6 md:leading-8">
            Tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam quis <br /> nostroercitation ullamco laboris
          </p>
          <button className="border border-white text-white py-2 px-5 mt-5">Let's work together</button>
        </div>

        {/* Image Section */}
        <div
          className="herro_img w-full md:w-1/2 h-[480px] md:h-[700px] mt-5 md:mt-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>

      <Herro_images />
    </section>
  );
};

export default Herro;
