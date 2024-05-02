interface ContactInformationProps {
    title: string,
    text: string,
    blockStyle?: string,
    titleStyle?: string,
    textStyle?: string
}

export default function ContactInformation({title, text, blockStyle, titleStyle, textStyle}: ContactInformationProps) {
  return (
    <div className={`h-[288px] w-[188px] ${blockStyle}`}>
      <h3 className={`text-[#E6E6E6] text-sm not-italic font-bold mb-[10px] ${titleStyle}`}>{title}</h3>
      <p className={`text-[#E6E6E6] text-[15px] not-italic font-medium leading-5 ${textStyle}`}>{text}</p>
    </div>
  );
}
