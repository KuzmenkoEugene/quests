"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { postOrderQuest } from "@/helper/postOrderQuest/postOrderQuest";
import Input from "../Input/Input";
import Image from "next/image";
import Link from "next/link";
import close_logo from "../../assets/icons/close.svg";
import schema from "@/helper/zodValidation/zodValidation";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type Inputs = {
  name: string;
  phone: string;
  peopleCount: number;
  isLegal: boolean;
};

const Form: React.FC = () => {
  const router = useRouter();
  const [isLegal, setIsValid] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      peopleCount: 1,
      isLegal: false,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const responseStatus = await postOrderQuest(data, isLegal);
    if (responseStatus === "201") {
      router.push("/");
    }
  };

  const watchAllFields = watch();

  return (
    <div className="relative flex flex-col w-[480px] pt-[32px] pb-[50px] pl-[32px] pr-[34px] shrink-0 bg-bgForm">
      <h2 className="text-[#FFF] text-[32px] not-italic font-extrabold leading-9">
        Оставить заявку
      </h2>
      <Link
        className="flex absolute w-[14px] h-[14px] top-[40px] right-[33px]"
        href={"/"}
      >
        <Image className="w-[14px] h-[14px]" src={close_logo} alt="close" />
      </Link>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[30px]">
        <div className="mb-[32px]">
          <Input
            register={register}
            name="name"
            label="Ваше Имя"
            placeholder="Имя"
          />
          {errors?.name && (
            <p className="text-red-500 mb-[32px]">{errors?.name.message}</p>
          )}
        </div>
        <div className="mb-[32px]">
          <Input
            register={register}
            name="phone"
            label="Контактный телефон"
            placeholder="Телефон"
          />
          {errors?.phone && (
            <p className="text-red-500 mb-[32px]">{errors?.phone.message}</p>
          )}
        </div>
        <div className="mb-[50px]">
          <Input
            name="peopleCount"
            register={register}
            label="Количество участников"
            placeholder="Количество участников"
          />
          {errors?.peopleCount && (
            <p className="text-red-500">{errors?.peopleCount.message}</p>
          )}
        </div>
        <div className="flex justify-center mb-[25px]">
          <button
            disabled={!watchAllFields.isLegal ? true : false}
            className={`w-[219px] h-[47px] bg-[#B8B8B8] rounded-[47px] text-[#FFF] text-[14px] not-italic font-semibold tracking-[0.48px] ${
              watchAllFields.isLegal ? `bg-[#F28A0F] cursor-pointer` : false
            }`}
          >
            Взяти участь
          </button>
        </div>
        <div className="flex items-start gap-[8px]">
          <input
            {...register("isLegal")}
            type="checkbox"
            className="h-[16px] w-[16px]"
          />
          <label className="text-[14px] text-[#E6E6E6]">
            Я согласен с{" "}
            <Link className="underline mx-2" href="#">
              правилами обработки персональных данных
            </Link>
            и пользовательским соглашением
          </label>
        </div>
      </form>
    </div>
  );
};

export default Form;
