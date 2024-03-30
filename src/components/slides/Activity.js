import ImageCard from "../ImageCard";
import { GuideSheet } from "../images";
import { ActivityData } from "../../constants/SlidesData/Activity";
import GuideSheetModal from "../modal/GuideSheetModal";
import Question from "../Question";
import { useState } from "react";

export default function Activity() {
  const [openGuideSheet, setOpenGuideSheet] = useState(false);

  return (
    <div>
      <div className="slide lg:text-[20px] sm:text-[16px]">
        <div className="activity-question">{ActivityData.title}</div>
        <div className="paragraph self-start">{ActivityData.hint}</div>
        <div className="flex justify-evenly w-full">
          {ActivityData.options.map((option, index) => (
            <ImageCard key={index} image={option.image} text={option.name} />
          ))}
        </div>
        <Question question={ActivityData.question} />
        <span className="green-bg">{ActivityData.definition}</span>
        <div>{ActivityData.description}</div>
      </div>
      <GuideSheetModal
        open={openGuideSheet}
        onClose={() => {
          setOpenGuideSheet(false);
        }}
        question={ActivityData.question}
        answer={ActivityData.answer}
      />
      <img
        src={GuideSheet}
        onClick={() => {
          setOpenGuideSheet(true);
        }}
        alt="guide"
        className="image absolute top-[250px] right-0 cursor-pointer"
      />
    </div>
  );
}
