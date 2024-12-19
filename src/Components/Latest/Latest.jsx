import React from 'react';
import All1 from"../Latest/Rectangle 725.png"
import All2 from"../Latest/Rectangle 726.png"
import All3 from"../Latest/Rectangle 727.png"
import All4 from"../Latest/Rectangle 728.png"
import All5 from"../Latest/Rectangle 754.png"
import All6 from"../Latest/Rectangle 755.png"
import All7 from"../Latest/Rectangle 757.png"
import All8 from"../Latest/Rectangle 756.png"
function Letst(props) {
    return (
        <div className="w-full h-auto flex flex-col">
            <div>
                <h3 className={"text-[#FFC978] pl-[250px] text-[20px]"}>OUR PROJECT</h3>
                <h2 className={"text-[55px] pl-[250px]"}>Our Latest Projects</h2>

                <div className="gap-5 flex float-end  pr-[170px] mt-[-40px]">
                    <a className={"text-[20px ]"} to="/All">All</a>
                    <a className={"text-[20px ]"} to="/Architecture">Architecture</a>
                    <a className={"text-[20px ]"} to="/Construction">Construction</a>
                    <a className={"text-[20px ]"} to="/Interior Design">Interior Design</a>
                </div>

            </div>

            <div className="w-full h-auto flex justify-center items-center gap-5 ">
                <img  src={All1} alt="" className={"w-[290px] h-[480px]"} />
                <img  src={All2} alt="" className={"w-[290px] h-[480px] mt-[90px]"} />
                <img  src={All3} alt="" className={"w-[290px] h-[480px]"} />
                <img  src={All4} alt="" className={"w-[290px] h-[480px] mt-[90px]"} />
            </div>
            <div className="w-full h-auto flex justify-center items-center gap-5 mt-[-70px]">
                <img  src={All5} alt="" className={"w-[290px] h-[480px]"} />
                <img  src={All6} alt="" className={"w-[290px] h-[480px] mt-[90px]"} />
                <img  src={All7} alt="" className={"w-[290px] h-[480px]"} />
                <img  src={All8} alt="" className={"w-[290px] h-[480px] mt-[90px]"} />
            </div>
            <br/>
            <br/>

        </div>
    );
}

export default Letst;