import React from "react";
import elipse from "../../assets/elipse.png";
import cal from "../../assets/cal.png";
import Vector from "../../assets/Vector.png";

const Cloud = () => {
  const cards = [
    {
      icon: elipse,
      bgColor: "bg-[#5b72ee]",
      title: (
        <>
          Online Billing,
          <br />
          Invoicing, & Contracts
        </>
      ),
      desc: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
      alt: "Billing Icon",
    },
    {
      icon: cal,
      bgColor: "bg-[#00cbb8]",
      title: (
        <>
          Easy Scheduling &
          <br />
          Attendance Tracking
        </>
      ),
      desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
      alt: "Calendar Icon",
    },
    {
      icon: Vector,
      bgColor: "bg-[#29b2fe]",
      title: <>Customer Tracking</>,
      desc: "Automate and track emails to individuals or groups. Built-in tools help organize your organization.",
      alt: "Tracking Icon",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto text-center px-4 py-12 sm:py-16 md:py-20 lg:py-24">
      
   
      <h2 className="font-bold mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px]">
        <span className="text-[#242663]">All-In-One</span>{" "}
        <span className="text-[#00cbb8]">Cloud Software.</span>
      </h2>

     
      <p className="max-w-[700px] mx-auto text-[#696984] leading-relaxed text-sm sm:text-base mb-16 md:mb-24">
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-6 lg:gap-10 w-full items-stretch pt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col bg-white rounded-[20px] relative pt-12 pb-8 px-6 sm:px-8 shadow-[0_20px_50px_rgba(47,50,125,0.05)] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(47,50,125,0.1)] text-center"
          >
         
            <div
              className={`rounded-full flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_6px_12px_rgba(0,0,0,0.05)] ${card.bgColor} w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20`}
            >
              <img
                src={card.icon}
                alt={card.alt}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

       
            <h3 className="font-medium text-[#25265e] mb-3 leading-snug text-base sm:text-lg lg:text-xl mt-3">
              {card.title}
            </h3>
            
            <p className="font-normal text-[#696984] leading-relaxed text-xs sm:text-sm md:text-[14px] lg:text-base">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Cloud;