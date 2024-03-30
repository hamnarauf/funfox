import ModalLayout from "./ModalLayout";
import Question from "../Question";

export default function GuideSheetModal({
  open,
  onClose,
  question,
  answer = "",
}) {
  return (
    <ModalLayout open={open} onClose={onClose}>
      <div className="text-white h-full">
        <h1 className="text-[32px] text-center">Guide Sheet</h1>
        <div className="mt-32 px-12 text-[20px]">
          <Question question={question} defaultInputValue={`> ${answer}`} />
        </div>
      </div>
    </ModalLayout>
  );
}
