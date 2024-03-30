import Slider from "./components/slider/Slider";
import { Navigate, Route, BrowserRouter, Routes } from "react-router-dom";
import { slidesDeck } from "./constants/slidesDeck";
import { useState } from "react";

function App() {
  const defaultSlideIndex = 0;
  const [activeSlide, setActiveSlide] = useState(defaultSlideIndex);

  return (
    <BrowserRouter>
      <Slider activeSlide={activeSlide} setActiveSlide={setActiveSlide}>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to={slidesDeck[defaultSlideIndex].path}
                replace={true}
              />
            }
          />
          {slidesDeck.map((slide, index) => (
            <Route key={index} path={slide.path} element={slide.element} />
          ))}
        </Routes>
      </Slider>
    </BrowserRouter>
  );
}

export default App;
