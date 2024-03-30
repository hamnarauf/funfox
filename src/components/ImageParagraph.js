export default function ImageParagraph({ image, text }) {
  return (
    <div className="flex items-center green-bg paragraph px-[14px]">
      <div>{text}</div>
      {image && <img src={image} className="image" alt="para" />}
    </div>
  );
}
