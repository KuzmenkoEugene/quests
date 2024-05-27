import Link from "next/link";

interface ButtonProps {
  id: string;
}

export default function Button({id}: ButtonProps) {
  return (
    <Link href={`${id}/form`}>
      <button className="w-[185px] h-[47px] bg-[#FEC432] rounded-md text-[#270B00] text-[16px] not-italic font-semibold tracking-[0.48px] cursor-pointer ">
        Взяти участь
      </button>
    </Link>
  );
}
