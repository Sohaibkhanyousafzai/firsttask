import React from "react";

export default function Success() {
  const stats = [
    { number: "15K+", label: "Students" },
    { number: "75%", label: "Total success" },
    { number: "35", label: "Main questions" },
    { number: "26", label: "Chief experts" },
    { number: "16", label: "Years of experience" },
  ];

  return (
    <section className="w-full bg-white flex justify-center items-center py-12 px-6 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl w-full flex flex-col items-center gap-10 md:gap-14">
        
       
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="font-bold text-[#0b0f19] tracking-tight mb-4 text-3xl sm:text-4xl lg:text-5xl">
            Our Success
          </h2>
          <p className="leading-relaxed text-[#556070] font-normal text-sm sm:text-base md:text-lg">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 lg:gap-10 w-full mt-6 justify-center items-start">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center gap-2 ${
                index === stats.length - 1 && stats.length % 2 !== 0 
                  ? "col-span-2 md:col-span-1" 
                  : ""
              }`}
            >
             
              <span className="font-light bg-[linear-gradient(135deg,#1d61b4_0%,#43bfc7_100%)] bg-clip-text text-transparent inline-block leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {stat.number}
              </span>

           
              <p className="font-medium text-[#2d3748] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}