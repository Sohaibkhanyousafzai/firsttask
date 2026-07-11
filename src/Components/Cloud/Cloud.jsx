import React from "react";
import elipse from "../../assets/elipse.png";
import cal from "../../assets/cal.png";
import Vector from "../../assets/Vector.png";

const Cloud = () => {
  return (
    <div
      className="
        w-full max-w-[1200px] mx-auto text-center box-border
        pt-[120px] pb-[80px] px-[20px]
        min-[992px]:max-[1199px]:pt-[100px]
        min-[768px]:max-[991px]:pt-[90px] min-[768px]:max-[991px]:pb-[64px]
        min-[685px]:max-[767px]:pt-[80px] min-[685px]:max-[767px]:pb-[56px]
        min-[568px]:max-[684px]:pt-[70px] min-[568px]:max-[684px]:pb-[48px]
        min-[480px]:max-[567px]:pt-[60px] min-[480px]:max-[567px]:pb-[40px]
        max-[479px]:pt-[56px] max-[479px]:pb-[32px] max-[479px]:px-[16px]
      "
    >
      <h2
        className="
          font-bold mt-[-75px] mb-[20px]
          text-[36px]
          min-[768px]:max-[991px]:text-[32px]
          min-[685px]:max-[767px]:text-[28px]
          min-[568px]:max-[684px]:text-[26px]
          min-[480px]:max-[567px]:text-[24px]
          max-[479px]:text-[22px] max-[479px]:mt-[-40px]
        "
      >
        <span className="text-[#242663]">All-In-One</span>{" "}
        <span className="text-[#00cbb8]">Cloud Software.</span>
      </h2>

      <p
        className="
          max-w-[700px] mx-auto text-[#696984] leading-[1.8]
          text-[16px] mb-[90px]
          min-[768px]:max-[991px]:mb-[64px]
          max-[767px]:mb-[48px]
          max-[479px]:text-[15px]
        "
      >
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </p>

      <div
        className="
          flex justify-center items-stretch flex-wrap
          w-[1440px] h-[460px] gap-[40px] ml-[-150px]
          min-[1024px]:max-[1199px]:w-full min-[1024px]:max-[1199px]:ml-0 min-[1024px]:max-[1199px]:h-auto min-[1024px]:max-[1199px]:gap-[24px]
          min-[992px]:max-[1023px]:w-full min-[992px]:max-[1023px]:ml-0 min-[992px]:max-[1023px]:h-auto min-[992px]:max-[1023px]:gap-[20px]
          min-[768px]:max-[991px]:w-full min-[768px]:max-[991px]:ml-0 min-[768px]:max-[991px]:h-auto min-[768px]:max-[991px]:gap-[20px]
          max-[767px]:w-full max-[767px]:ml-0 max-[767px]:h-auto max-[767px]:flex-col max-[767px]:gap-[24px]
        "
      >
        <div
          className="
            flex-1 max-w-[600px] flex flex-col bg-white rounded-[20px] relative
            pt-[120px] box-border
            shadow-[0_20px_50px_rgba(47,50,125,0.05)]
            transition-transform duration-300 ease-in-out
            hover:-translate-y-[8px] hover:shadow-[0_30px_60px_rgba(47,50,125,0.1)]
            min-[992px]:max-[1199px]:pt-[100px]
            min-[768px]:max-[991px]:pt-[90px]
            max-[767px]:max-w-full max-[767px]:pt-[80px]
          "
        >
          <div
            className="
              w-[100px] h-[100px] rounded-full flex items-center justify-center
              absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
              shadow-[0_8px_16px_rgba(0,0,0,0.05)] bg-[#5b72ee]
              max-[479px]:w-[80px] max-[479px]:h-[80px]
            "
          >
            <img src={elipse} alt="Billing Icon" className="w-full h-full object-contain" />
          </div>
          <h3
            className="
              font-medium text-[#25265e] mb-[20px] leading-[1.5]
              text-[30px]
              min-[768px]:max-[991px]:text-[26px]
              max-[767px]:text-[24px]
              max-[479px]:text-[22px]
            "
          >
            Online Billing,
            <br />
            Invoicing, & Contracts
          </h3>
          <p
            className="
              font-normal text-[#696984] leading-[1.7]
              text-[20px]
              min-[768px]:max-[991px]:text-[18px]
              max-[767px]:text-[16px]
            "
          >
            Simple and secure control of your organization's financial and legal
            transactions. Send customized invoices and contracts.
          </p>
        </div>

        <div
          className="
            flex-1 max-w-[600px] flex flex-col bg-white rounded-[20px] relative
            pt-[120px] box-border
            shadow-[0_20px_50px_rgba(47,50,125,0.05)]
            transition-transform duration-300 ease-in-out
            hover:-translate-y-[8px] hover:shadow-[0_30px_60px_rgba(47,50,125,0.1)]
            min-[992px]:max-[1199px]:pt-[100px]
            min-[768px]:max-[991px]:pt-[90px]
            max-[767px]:max-w-full max-[767px]:pt-[80px]
          "
        >
          <div
            className="
              w-[100px] h-[100px] rounded-full flex items-center justify-center
              absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
              shadow-[0_8px_16px_rgba(0,0,0,0.05)] bg-[#00cbb8]
              max-[479px]:w-[80px] max-[479px]:h-[80px]
            "
          >
            <img src={cal} alt="Calendar Icon" className="w-full h-full object-contain" />
          </div>
          <h3
            className="
              font-medium text-[#25265e] mb-[20px] leading-[1.5]
              text-[30px]
              min-[768px]:max-[991px]:text-[26px]
              max-[767px]:text-[24px]
              max-[479px]:text-[22px]
            "
          >
            Easy Scheduling &
            <br />
            Attendance Tracking
          </h3>
          <p
            className="
              font-normal text-[#696984] leading-[1.7]
              text-[20px]
              min-[768px]:max-[991px]:text-[18px]
              max-[767px]:text-[16px]
            "
          >
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance.
          </p>
        </div>

        <div
          className="
            flex-1 max-w-[600px] flex flex-col bg-white rounded-[20px] relative
            pt-[120px] box-border
            shadow-[0_20px_50px_rgba(47,50,125,0.05)]
            transition-transform duration-300 ease-in-out
            hover:-translate-y-[8px] hover:shadow-[0_30px_60px_rgba(47,50,125,0.1)]
            min-[992px]:max-[1199px]:pt-[100px]
            min-[768px]:max-[991px]:pt-[90px]
            max-[767px]:max-w-full max-[767px]:pt-[80px]
          "
        >
          <div
            className="
              w-[100px] h-[100px] rounded-full flex items-center justify-center
              absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
              shadow-[0_8px_16px_rgba(0,0,0,0.05)] bg-[#29b2fe]
              max-[479px]:w-[80px] max-[479px]:h-[80px]
            "
          >
            <img src={Vector} alt="Tracking Icon" className="w-full h-full object-contain" />
          </div>
          <h3
            className="
              font-medium text-[#25265e] mb-[20px] leading-[1.5]
              text-[30px]
              min-[768px]:max-[991px]:text-[26px]
              max-[767px]:text-[24px]
              max-[479px]:text-[22px]
            "
          >
            Customer Tracking
          </h3>
          <p
            className="
              font-normal text-[#696984] leading-[1.7]
              text-[20px]
              min-[768px]:max-[991px]:text-[18px]
              max-[767px]:text-[16px]
            "
          >
            Automate and track emails to individuals or groups. Built-in tools
            help organize your organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cloud;