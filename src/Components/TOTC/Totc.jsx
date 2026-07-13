import React from "react";
import totc1 from "../../assets/totc1.png";
import totc2 from "../../assets/totc2.png";
import Headings1 from "../Headings1";

const Totc = () => {
  return (
    <div className="w-full text-center mt-[27px] font-poppins px-4 min-[568px]:px-6">
      {/* Headings */}
      <div className="font-bold mb-[33px] leading-[1.3] text-[24px] min-[480px]:text-[28px] min-[568px]:text-[30px] min-[685px]:text-[32px] min-[768px]:text-[34px] min-[992px]:text-[36px]">
        <Headings1 
          blueTextStart={"What is"}
          cyanTextMid={"TOTC"}      
        />
      </div>
      
      {/* Description */}
      <p className="max-w-[1110px] mx-auto text-[#555] leading-relaxed
        text-[15px] 
        min-[480px]:text-[16px] 
        min-[568px]:text-[18px] 
        min-[685px]:text-[20px] 
        min-[768px]:text-[22px] 
        min-[992px]:text-[24px] 
        min-[1024px]:text-[25px]">
        TOTC is a platform that allows educators to create online classes whereby they can 
        store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
      </p>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-6 min-[685px]:gap-12 min-[1024px]:gap-[108px] mt-10">

        {/* Card 1 */}
        <div className="relative mt-[45px] overflow-hidden rounded-[20px] shadow-lg
          w-[100%] h-[240px]
          min-[480px]:h-[280px]
          min-[568px]:w-[450px] min-[568px]:h-[320px]
          min-[768px]:w-[500px] min-[768px]:h-[350px]
          min-[992px]:w-[550px] min-[992px]:h-[380px]
          min-[1024px]:w-[600px] min-[1024px]:h-[400px]">
          <img src={totc1} alt="card1" className="w-full h-full object-cover block" />

          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
            <h3 className="mb-2.5 font-bold tracking-wider text-[14px] min-[568px]:text-[16px] min-[992px]:text-[18px]">
              FOR INSTRUCTIONS
            </h3>
            <button className="px-[18px] py-2 border-none rounded-[20px] bg-gray-500 hover:bg-gray-600 transition-colors text-white font-medium text-[13px] min-[568px]:text-[15px]">
              Start a class today.
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative mt-[45px] overflow-hidden rounded-[20px] shadow-lg
          w-[100%] h-[240px]
          min-[480px]:h-[280px]
          min-[568px]:w-[450px] min-[568px]:h-[320px]
          min-[768px]:w-[500px] min-[768px]:h-[350px]
          min-[992px]:w-[550px] min-[992px]:h-[380px]
          min-[1024px]:w-[600px] min-[1024px]:h-[400px]">
          <img src={totc2} alt="card2" className="w-full h-full object-cover block" />

          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
            <h3 className="mb-2.5 font-bold tracking-wider text-[14px] min-[568px]:text-[16px] min-[992px]:text-[18px]">
              FOR STUDENTS
            </h3>
            <button className="px-[18px] py-2 border-none rounded-[20px] bg-[#87CEEB] hover:bg-[#70bee0] transition-colors text-white font-medium text-[13px] min-[568px]:text-[15px]">
              Enter access code
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Totc;