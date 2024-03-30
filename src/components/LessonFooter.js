export default function LessonFooter({ points }) {
  return (
    <div className="paragraph relative bg-peach rounded-[20px]">
      <div className="px-9 py-2 my-2 mx-5 lesson-footer">
        {points.map((point, index) => (
          <div key={index}>{point}</div>
        ))}
      </div>
    </div>
  );
}
