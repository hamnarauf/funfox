import ImageCard from "../ImageCard";
import { Clock, Home } from "../images";
import Input from "../Input";
import { ActivityData } from "../../constants/SlidesData/Activity";

export default function Activity() {
  return (
    <div className="slide text-[20px]">
      <div className="activity-question">{ActivityData.title}</div>
      <div className="paragraph self-start">{ActivityData.hint}</div>
      <div className="flex justify-evenly w-full">
        {ActivityData.options.map((option, index) => (
          <ImageCard key={index} image={option.image} text={option.name} />
        ))}
      </div>
      <div className="self-start">{ActivityData.question}</div>
      <div className="flex whitespace-nowrap gap-3 items-center my-2 w-full">
        <div>Any guesses?</div>
        <Input />
        <div className="flex items-center gap-3 mx-5">
          Hints:
          <img src={Clock} alt="clock" />
          <img src={Home} alt="home" />
        </div>
      </div>
      <span className="green-bg">{ActivityData.definition}</span>
      <div>{ActivityData.description}</div>
    </div>
  );
}
