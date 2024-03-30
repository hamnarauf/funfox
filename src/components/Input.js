export default function Input({ defaultValue = "" }) {
  return (
    <div className="white-bg pb-2 px-2 w-full">
      <input
        type="text"
        defaultValue={defaultValue}
        className="w-full border-b-2 pt-1 border-greyStroke outline-none text-black"
      />
    </div>
  );
}
