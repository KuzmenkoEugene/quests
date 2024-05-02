import Title from "@/Components/Title/Title";
import Map from "@/Components/Map/Map";
import ContactInformation from "@/Components/ContactInformation/ContactInformation";
import { contactInformationItems } from "@/helper/constants/constants";

export default function Page() {
    return (
      <div className="flex flex-row gap-[123px] pt-[64px] pl-[142px] pr-[150px] h-screen">
        <div>
          <Title text={'Ігри у Львові'} title={'Контакти'}/>
          <div className="flex flex-col gap-[35px] w-[188px] h-[288px] mt-[29px] pl-[24px] shrink-0">
            {
              contactInformationItems.map((el) => (
                <ContactInformation key={el.title} title={el.title} text={el.text} />
              ))
            }
          </div>
        </div>
        <Map/>
      </div>
    );
  }