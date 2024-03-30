import { FunFox, Info, LeftCover, RightCover, UserHelp, Week1 } from "../images";
import SliderNavigation from "./SliderNavigation";

export default function Slider({ activeSlide, setActiveSlide, children }) {
  return (
    <div className="flex bg-pink relative overflow-hidden">
      <img src={FunFox} alt="fun fox" className="image absolute top-0 left-[-6px]"/>
      <img src={LeftCover} alt="left-cover" className="image mt-24" />
      <div className="flex flex-col py-[12px] px-[64px] slide-container">
        <img src={Week1} alt="week 1" className="image week" />

        {/* slide content goes here */}
        <div className="bg-lightGrey mt-[16px] mb-[10px] rounded-[20px] flex p-[20px] pb-[40px]">
          {children}
        </div>

        <SliderActions
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </div>
      <img src={RightCover} className="image lg:mr-0 md:mr-[-20px]" alt="right-cover" />
    </div>
  );
}

function SliderActions({ activeSlide, setActiveSlide }) {
  return (
    <div className="w-full flex justify-between">
      <img src={UserHelp} className="image" alt="user help" />
      <SliderNavigation
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
      />
      <img src={Info} className="image" alt="info" />
    </div>
  );
}
