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
    <section
      className="
        w-full bg-white flex justify-center items-center
        py-[81px] px-[24px]
        min-[992px]:max-[1199px]:py-[64px]
        min-[768px]:max-[991px]:py-[56px]
        min-[568px]:max-[767px]:py-[48px]
        max-[567px]:py-[40px] max-[567px]:px-[16px]
      "
    >
      <div
        className="
          max-w-full w-full flex flex-col items-center
          gap-[60px] mt-[48px]
          min-[768px]:max-[991px]:gap-[48px]
          max-[767px]:gap-[36px]
        "
      >
        <div className="text-center max-w-[700px] mx-auto">
          <h2
            className="
              font-bold text-[#0b0f19] tracking-[-0.02em] mb-[16px]
              text-[48px]
              min-[1024px]:max-[1199px]:text-[42px]
              min-[992px]:max-[1023px]:text-[38px]
              min-[768px]:max-[991px]:text-[34px]
              min-[685px]:max-[767px]:text-[30px]
              min-[568px]:max-[684px]:text-[26px]
              min-[480px]:max-[567px]:text-[24px]
              max-[479px]:text-[22px]
            "
          >
            Our Success
          </h2>

          <p
            className="
              leading-[1.7] text-[#556070] font-normal
              text-[18px]
              min-[768px]:max-[991px]:text-[16px]
              max-[767px]:text-[15px]
            "
          >
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>

        <div
          className="
            flex justify-between items-center flex-wrap
            w-[1490px] gap-[95px] mt-[45px] ml-[-15px]
            min-[1024px]:max-[1199px]:w-full min-[1024px]:max-[1199px]:ml-0 min-[1024px]:max-[1199px]:gap-[60px]
            min-[992px]:max-[1023px]:w-full min-[992px]:max-[1023px]:ml-0 min-[992px]:max-[1023px]:gap-[48px]
            min-[768px]:max-[991px]:w-full min-[768px]:max-[991px]:ml-0 min-[768px]:max-[991px]:gap-[40px] min-[768px]:max-[991px]:justify-center
            min-[685px]:max-[767px]:w-full min-[685px]:max-[767px]:ml-0 min-[685px]:max-[767px]:gap-[32px] min-[685px]:max-[767px]:justify-center
            min-[568px]:max-[684px]:w-full min-[568px]:max-[684px]:ml-0 min-[568px]:max-[684px]:gap-[28px] min-[568px]:max-[684px]:justify-center
            min-[480px]:max-[567px]:w-full min-[480px]:max-[567px]:ml-0 min-[480px]:max-[567px]:gap-[24px] min-[480px]:max-[567px]:justify-center
            max-[479px]:w-full max-[479px]:ml-0 max-[479px]:gap-[20px] max-[479px]:flex-col
          "
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 min-w-[160px] text-center flex flex-col items-center gap-[8px] max-[479px]:min-w-0 max-[479px]:w-full"
            >
              <span
                className="
                  font-[300] bg-[linear-gradient(135deg,#1d61b4_0%,#43bfc7_100%)] bg-clip-text text-transparent inline-block leading-none
                  text-[98px]
                  min-[1024px]:max-[1199px]:text-[80px]
                  min-[992px]:max-[1023px]:text-[70px]
                  min-[768px]:max-[991px]:text-[64px]
                  min-[685px]:max-[767px]:text-[56px]
                  min-[568px]:max-[684px]:text-[50px]
                  min-[480px]:max-[567px]:text-[44px]
                  max-[479px]:text-[56px]
                "
              >
                {stat.number}
              </span>

              <p
                className="
                  font-medium text-[#2d3748] whitespace-nowrap
                  text-[32px]
                  min-[1024px]:max-[1199px]:text-[28px]
                  min-[992px]:max-[1023px]:text-[24px]
                  min-[768px]:max-[991px]:text-[22px]
                  min-[685px]:max-[767px]:text-[20px]
                  min-[568px]:max-[684px]:text-[18px]
                  min-[480px]:max-[567px]:text-[16px]
                  max-[479px]:text-[18px]
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}