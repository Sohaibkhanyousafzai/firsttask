import { useState } from "react";
import { Star, ArrowRight, Palette } from "lucide-react";
import image1 from "../../assets/1st.avif"
import image2 from "../../assets/2nd.avif"
import image3 from "../../assets/3rd.avif"
import image4 from "../../assets/4rth.avif"
import image5 from "../../assets/5th.avif"
import image6 from "../../assets/6th.avif"
import image7 from "../../assets/7th.avif"
import image8 from "../../assets/8th.avif"



const courses = [
  {
    id: 1,
    title: "Ut Sed Eros",
    bg: "bg-orange-500",
    image:
      image1,
    heading: "Integer id Orc Sed Ante Tincidunt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5,
    price: 450,
  },
  {
    id: 2,
    title: "Curabitur Egestas",
    bg: "bg-rose-400",
    image:
      image2,
    heading: "Nulla Facilisi Vestibulum Ante",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4,
    price: 320,
  },
  {
    id: 3,
    title: "Quisque Consequat",
    bg: "bg-amber-800",
    image:
      image3,
    heading: "Donec Ullamcorper Nulla Non",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5,
    price: 275,
  },
  {
    id: 4,
    title: "Cras Convallis",
    bg: "bg-yellow-500",
    image:
      image4,
    heading: "Sed Posuere Consectetur Est",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4,
    price: 399,
  },
  {
    id: 5,
    title: "Vestibulum Fauci",
    bg: "bg-purple-400",
    image:
      image5,
    heading: "Etiam Porta Sem Malesuada",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5,
    price: 210,
  },
  {
    id: 6,
    title: "Ut Sed Eros",
    bg: "bg-sky-500",
    image:
      image6,
    heading: "Curabitur Blandit Tempus",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4,
    price: 180,
  },
  {
    id: 7,
    title: "Vestibulum fauci",
    bg: "bg-[#61a496]",
    image:
      image7,
    heading: "Sed Cras Ornare Tristique",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5,
    price: 500,
  },
  {
    id: 8,
    title: "Integer id Orc",
    bg: "bg-emerald-600",
    image:
      image8,
    heading: "Integer id Orc Sed Ante Tincidunt",
    desc: "Cras convallis lacus orci, tristique tincidunt magna fringilla at faucibus vel.",
    rating: 5,
    price: 450,
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < count ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
          }
        />
      ))}
    </div>
  );
}

function CourseCard({ course, isActive, onEnter }) {
  return (
    <div
      onMouseEnter={onEnter}
      onClick={onEnter}
      className={`relative flex-shrink-0 transition-all duration-500 ease-in-out cursor-pointer origin-bottom-left ${
        isActive 
          ? "z-20 w-[685px] h-[430px]" 
          : "z-10 w-[104px] h-[418px]"
      }`}
    >







      <div
        className={`absolute inset-0 bg-white border-[2.5px] border-green-100/90 rounded-[40px] p-2 flex flex-col items-center justify-between shadow-sm transform -rotate-[10deg] transition-all duration-300 origin-bottom-left
             ${ isActive ? "opacity-0 pointer-events-none scale-90" : "opacity-100 hover:scale-[1.03]"
        }`}
      >
        <div className="w-full h-full bg-[#dbf5db] rounded-[32px] p-2.5 flex flex-col items-center justify-center">
          <div className={`w-full h-full ${course.bg} rounded-[24px] flex items-center justify-center relative overflow-hidden shadow-inner`}>
            <span 
              className="absolute whitespace-nowrap text-white text-[24px] font-medium leading-[100%] tracking-[0px] text-center -rotate-90 select-none uppercase font-sans"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {course.title}
            </span>
          </div>
        </div>
      </div>

      
      



      
      <div
        className={`absolute inset-0 bg-white border border-slate-200 rounded-[32px] p-8 flex gap-7 shadow-xl transition-all duration-500 ease-out ${
          isActive ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        {/* Left Side: Image */}
        <div className="w-[42%] h-full rounded-[24px] overflow-hidden flex-shrink-0 relative shadow-sm">
          <img
            src={course.image}
            alt={course.heading}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="text-center text-white bg-white/20 backdrop-blur-md rounded-full p-2 w-28 h-28 flex flex-col justify-center border border-white/30">
              <span className="text-[11px] font-black tracking-wide leading-tight">LOREM<br/>IPSUM</span>
              <span className="text-[6px] text-white/90 mt-0.5 uppercase leading-none">Lorem ipsum dolor</span>
            </div>
          </div>
        </div>





        <div className="flex flex-col justify-start w-[58%] pt-3 pb-1">
          {/* Heading */}
          <h3 className="text-[28px] sm:text-[32px] font-bold text-slate-800 leading-[1.15] tracking-tight">
            {course.heading}
          </h3>
          
          <p className="text-[17px] text-slate-500 mt-3 line-clamp-3 leading-relaxed">
            {course.desc}
          </p>

          <div className="flex items-center justify-between mt-5">
            <Stars count={course.rating} />
            <span className="text-lg font-black text-slate-800">${course.price}</span>
          </div>

          <button className="w-full border-2 border-cyan-400 text-cyan-500 hover:bg-cyan-400 hover:text-white text-sm font-bold tracking-wider rounded-[14px] py-2 mt-4 transition-colors uppercase">
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}

function CourseRow({ title, cards }) {
  const [activeId, setActiveId] = useState(8);

  return (
    <div className="mb-10 w-full overflow-visible">
      {/* Category Header */}
      <div className="w-full flex items-center justify-between mb-8 px-8 md:px-16">
        <div className="flex items-center gap-2.5 text-slate-700 font-bold text-[28px]">
          <Palette size={28} className="text-slate-500" />
          <h3 className="capitalize">{title}</h3>
        </div>

        <button 
          className="flex items-center gap-2 text-[24px] font-medium text-cyan-500 hover:text-cyan-600 uppercase transition-colors shrink-0"
          style={{ 
            fontFamily: "'Roboto', sans-serif",
            letterSpacing: "0px",
            lineHeight: "100%" 
          }}
        >
          SEE ALL 
          <ArrowRight className="w-[32.01px] h-[32.08px]" />
        </button>
      </div>

      
        
        <div className="flex flex-nowrap gap-5 pb-12 pt-6 px-8 md:px-16 items-end min-w-max justify-start lg:justify-center">
          {cards.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isActive={activeId === course.id}
              onEnter={() => setActiveId(course.id)}
            />
          ))}
          <div className="w-8 md:w-16 flex-shrink-0 h-10 lg:hidden" />
        </div>
      
    </div>
  );
}

export default function Cards() {
  return (
    <section className="w-full bg-[#f0f7fc] py-14 overflow-hidden">
      <div className="w-full">
        <div className="w-full mb-10 px-8 md:px-16">
          <h2 className="text-[40px] font-extrabold text-slate-800 leading-tight">Explore Course</h2>
          <p className="text-[24px] text-slate-400 mt-1.5 leading-normal">
            Ut sed eros finibus, placerat orci id, dapibus.
          </p>
        </div>

        <CourseRow title="Lorem Ipsum" cards={courses} />
      </div>
    </section>
  );
}