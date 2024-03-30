import React from "react";
import { Clock, Home } from "./images";
import Input from "./Input";

export default function Question({ question, defaultInputValue = "" }) {
  return (
    <>
      <div className="self-start">{question}</div>
      <div className="flex whitespace-nowrap lg:gap-3 items-center my-2 w-full sm:gap-1 flex-wrap">
        <div>Any guesses?</div>
        <div className="min-w-[32rem] flex-1 lg:mr-5 md:mr-2">
          <Input defaultValue={defaultInputValue} />
        </div>
        <div className="flex items-center lg:gap-3 md:gap-1">
          Hints:
          <img src={Clock} alt="clock" />
          <img src={Home} alt="home" />
        </div>
      </div>
    </>
  );
}
