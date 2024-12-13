import React from 'react';
import bg from './herrrobg.svg';

const Herro = () => {
  return (
    <section id="herro" className="bg-[#181b23]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-5">
        <div className="herro_txt text-left">
          <span className="text-[#FFC978] font-medium text-sm tracking-[0.3em] leading-6">Architecture design</span>
          <h3 className="text-white font-['Larken-Regular'] text-4xl mt-5 uppercase leading-[54px]">
            Professional <br />
            Interior Design
          </h3>
          <p className="text-[#ABAEB7] font-['Roboto'] text-xl mt-5 leading-8">
            Tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam quis <br /> nostroercitation ullamco laboris
          </p>
          <button className="border border-white text-white py-2 px-5 mt-5">Lets work together</button>
        </div>

        <div className="herro_img mt-5 md:mt-0">
          <img src={bg} alt="Background" className="w-full md:w-[720px] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Herro;
