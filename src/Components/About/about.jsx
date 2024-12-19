import React from 'react';
import Img1 from '../About/path.png';
import Img2 from '../About/Rectangle 760.png';
import Img02 from '../About/Rectangle 742.png';
import Img03 from '../About/Component 1.png';
import Img3 from '../About/Rectangle 723.png';
import Img4 from '../About/Rectangle 722.png';

function About(props) {
    return (
        <div className="w-full h-auto">
            <div className="flex  mt-[200px]">

                <div>
                    <img src={Img1} alt="" className={"z-[-1]  mt-[-130px] absolute  w-[710px]"}/>

                    <h3 className={"text-[55px] pl-[230px] "}>ABOUT US</h3>
                    <p className={"text-[16px] w-[400px] ml-[350px] pt-10"}>As development continues, engineers may
                        visit
                        building
                        destinations to guarantee that temporary
                        workers pursue the plan, keep to the timetable, utilize the predefined materials, and meet
                        work-quality models.</p>
                    <img src={Img2} alt="" className={"h-[150px] mt-[-120px] pl-[310px]"}/>
                    <h2 className={"text-[120px] pl-[250px] pt-[-80px]"}>85 <span className={" ml-[-20px] text-[75px]"}>%</span>
                    </h2>
                    <h4 className={"text-[20px] pl-[455px] w-[78px] mt-[-95px]"}>Satisfied Clients</h4>
                    <img src={Img02} alt="" className={"h-[155px] w-[380px] pt-[20px]  ml-[255px]"}/>
                    <img src={Img03} alt="" className={"h-[151px] w-[151px] mt-[-150px] float-end translate-x-[37px]"}/>

                </div>
                <div className={"flex gap-5"}>
                    <img src={Img3} alt=""  className={"ml-[50px] w-[250] h-[430px]"}/>
                    <img src={Img4} alt="" className={"mt-[-95px] w-[250] h-[430px]"}/>
                </div>
        </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default About;