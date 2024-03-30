import Cloud from "../Cloud";
import ImageParagraph from "../ImageParagraph";
import { Thinking } from "../images";
import LessonFooter from "../LessonFooter";
import { StoryElementsData } from "../../constants/SlidesData/StoryElement";

export default function StoryElements() {
  return (
    <div className="slide">
      <div className="lesson-heading">{StoryElementsData.title}</div>
      <div className="paragraph">{StoryElementsData.introduction}</div>
      <ImageParagraph image={Thinking} text={StoryElementsData.description} />
      <div className="flex justify-between my-2 w-full">
        {StoryElementsData.elements.map((element, index) => (
          <Cloud key={index} text={element.name} cloud={element.cloud} />
        ))}
      </div>
      <div className="paragraph mb-3">{StoryElementsData.conclusion}</div>
      <LessonFooter points={StoryElementsData.footer.points} />
    </div>
  );
}
