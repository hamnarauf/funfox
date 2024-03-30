export default function LessonFooter({ points }) {
  return (
    <div className="paragraph relative bg-peach rounded-[20px]">
      <div className="lg:px-9 md:pr-0 md:pl-7 sm:px-2 py-2 my-2 mx-5 lesson-footer max-w-[1000px]">
        {points.map((point, index) => (
          <div key={index}>{point}</div>
        ))}
      </div>
    </div>
  );
}
