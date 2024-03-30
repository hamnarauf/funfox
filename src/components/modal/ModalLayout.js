import { Close } from "../images";

export default function ModalLayout({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-[#6C5D4A]/70 ">
      <div class="w-[95vw] h-[90vh] rounded-[12px] relative z-10  bg-[#111111]/20 border-2 border-white p-5">
        <img
          src={Close}
          alt="close"
          className="image absolute right-5 top-5 cursor-pointer"
          onClick={onClose}
        />
        <div className="mt-12 text-white">{children}</div>
      </div>
    </div>
  );
}
