import { useNavigate } from "react-router-dom";
import { Down, LeftArrow, RightArrow, SlidePicker } from "../images";
import { slidesDeck } from "../../constants/slidesDeck";

export default function SliderNavigation({ activeSlide, setActiveSlide }) {
  const navigate = useNavigate();
  function nextSlide() {
    if (activeSlide < slidesDeck.length - 1) {
      const newSlide = activeSlide + 1;
      setActiveSlide(newSlide);
      navigate(slidesDeck[newSlide].path);
    }
  }

  function previousSlide() {
    if (activeSlide > 0) {
      const newSlide = activeSlide - 1;
      setActiveSlide(newSlide);
      navigate(slidesDeck[newSlide].path);
    }
  }

  return (
    <div className="flex gap-2">
      <img
        src={LeftArrow}
        className="image cursor-pointer"
        alt="left arrow"
        onClick={previousSlide}
      />
      <SliderPicker slideNumber={activeSlide + 1} />
      <img
        src={RightArrow}
        className="image cursor-pointer"
        alt="right arrow"
        onClick={nextSlide}
      />
    </div>
  );
}

function SliderPicker({ slideNumber }) {
  return (
    <div className="flex justify-center items-center relative">
      <img src={SlidePicker} className="image" alt="slide picker" />
      <div className="absolute top-0 left-0 my-3 flex text-center w-full">
        <div className="text-white w-[73%]">{slideNumber}</div>
        <img src={Down} height="5px" width="10px" alt="down" />
      </div>
    </div>
  );
}
