import checkbox from "../../assets/checkbox.svg";
import close from "../../assets/close.svg";
import tooltip from "../../assets/tooltip.svg";

const DocPdf = ({
  icon,
  title,
  style,
}: {
  icon: string;
  title: string;
  style?: string;
}) => {
  return (
    <div
      className={`h-[30px]  rounded-[20px] py-[7px] pr-[7px] pl-3 gap-[14px] bg-[#2B2B2B] flex ${style}`}
    >
      <div className="flex gap-2 justify-center items-center">
        <img src={icon} alt="" />
        <p className="text-sm font-normal h-[18px] text-white">{title}</p>
      </div>

      <div>
        <div className="flex gap-1.5">
          <img src={checkbox} alt="" />
          <p className="text-sm font-normal h-[18px] text-white">Force OCR</p>
          <img src={tooltip} alt="" />
        </div>
      </div>

      <div className="w-5 h-5 flex justify-center">
        <img className="w-2" src={close} alt="" />
      </div>
    </div>
  );
};

export default DocPdf;
