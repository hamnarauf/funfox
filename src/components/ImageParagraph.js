export default function ImageParagraph({ image, text }) {
  return (
    <div className="flex items-center green-bg paragraph lg:px-[14px] md:px-[8px]">
      <div>{text}</div>
      {image && <img src={image} className="image lg:h-min md:h-[100px] sm:h-[90px]" alt="para" />}
    </div>
  );
}
