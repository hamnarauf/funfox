export default function Cloud({ cloud, text }) {
  return (
    <div className="flex justify-center items-center relative">
      <img src={cloud} className="image" alt="cloud" />
      <div className="absolute px-7 text-center text-[20px] leading-5 uppercase">
        {text}
      </div>
    </div>
  );
}
