import { Info, LeftCover, RightCover, UserHelp, Week1 } from "../images";
import SliderNavigation from "./SliderNavigation";

export default function Slider({ activeSlide, setActiveSlide, children }) {
  return (
    <div className="flex bg-pink relative">
      <img src={LeftCover} alt="left-cover" className="image" />
      <div className="flex flex-col relative top-0 left-0 py-[12px] px-[64px]">
        <img src={Week1} alt="week 1" className="image" />

        {/* slide content goes here */}
        <div className="bg-lightGrey mt-[16px] mb-[10px] rounded-[20px] flex p-[20px] pb-[40px]">
          {children}
        </div>

        <SliderActions
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </div>
      <img src={RightCover} className="image" alt="right-cover" />
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
      <img src={Info} className="image" alt="user help" />
    </div>
  );
}
