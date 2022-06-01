import { formInputProps } from "../types";

const FormInput = (props: formInputProps) => {
  const { label, ...otherProps } = props;
  return (
    <div className="relative my-11">
      <input
        {...otherProps}
        className="peer my-6 block w-full border-b border-solid border-gray-500 bg-white bg-none p-2.5 pl-1.5 text-lg text-gray-500 outline-none"
      />
      <label
        className={`${
          props.value.length > 0 ? "top-[-14px] text-xs text-black" : "top-2.5 text-gray-500"
        } transition-top pointer-events-none absolute left-1.5 delay-[0ms] duration-300 ease-in peer-focus:top-[-14px] peer-focus:text-xs peer-focus:text-black`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
