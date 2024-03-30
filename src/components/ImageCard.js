export default function ImageCard({ image, text }) {
  return (
    <div className="flex flex-col items-center">
      <div className="white-bg px-8 py-3 max-w-fit">
        <img src={image} alt={text} />
      </div>
      <p className="mt-1 max-w-[294px] text-center">{text}</p>
    </div>
  );
}
