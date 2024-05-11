import { TitleProps } from "@/interfaces/TitleProps";


export default function Title({text, title, blockStyle, textStyle, titleStyle}: TitleProps) {
  return (
    <div className={`flex flex-col gap-[7px] ${blockStyle}`}>
      <p className={`text-[#F2890F] text-[14px] font-medium leading-5 ${textStyle}`}>
        {text}
      </p>
      <h1 className={`text-[#FFF] text-[61px] font-ralewayExtrabold leading-[70px] ${titleStyle}`}>
        {title}
      </h1>
    </div>
  );
}
