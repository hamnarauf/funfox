export default function Cloud({ cloud, text }) {
  return (
    <div className="flex justify-center items-center relative">
      <img src={cloud} className="image lg:h-min sm:h-[80px]" alt="cloud" />
      <div className="absolute px-7 text-center lg:text-[20px] md:text-[16px] leading-5 uppercase">
        {text}
      </div>
    </div>
  );
}
