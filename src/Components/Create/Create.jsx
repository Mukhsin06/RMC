import React from 'react';
import Bgimg from "../Create/Group 11930.png";

function Create(props) {
    return (
        <div className={"w-full h-screen"}>
            <img src={Bgimg} alt="" className={"mt-[80px]"}/>
            <h2 className={"text-[50px] z-[3] mt-[-440px] w-[550px] ml-[45%]"}>We Create Digital Experience</h2>
            <div className={"flex justify-center items-center gap-10 mt-[15px] ml-[270px]"}>
                <div>
                    <h2 className={"text-[60px] text-center text-[#FFAF76]"}>85 <span
                        className={"text-[35px] ml-[-10px]"}>%</span></h2>
                    <p className={"text-[18px]"}>Architecture</p>
                </div>
                <div>
                    <h2 className={"text-[60px] text-center text-[#FFAF76]"}>75 <span
                        className={"text-[35px] ml-[-10px]"}>%</span></h2>
                    <p className={"text-[18px]"}>Construction</p>
                </div>
                <div>
                    <h2 className={"text-[60px] text-center text-[#FFAF76]"}>65 <span
                        className={"text-[35px] ml-[-10px]"}>%</span></h2>
                    <p className={"text-[18px]"}>Interior Design</p>
                </div>
            </div>
            <button className={"ml-[47%] mt-[38px] w-[160px] h-[45px] border border-white"}>Lets work together</button>

        </div>
    );
}

export default Create;
