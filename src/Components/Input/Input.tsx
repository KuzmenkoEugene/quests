export type InputProps = {
    label: string;
    placeholder: string;
    name: string;
    register: any
  };

const Input: React.FC<InputProps> = ({register, label, placeholder, name}) => {
    return (
        <div>
            <label className='block text-[#E6E6E6] text-start text-[14px] font-medium mb-3'>{label}</label>
            <input
            {...register(name)}
            type={'text'}
            placeholder={placeholder}
            className='w-full bg-[#141414] border border-[#E6E6E6] text-primary text-[14px] text-[#E6E6E6] focus-visible:outline-none rounded px-4 py-2'
          />
        </div>
    )
}

export default Input