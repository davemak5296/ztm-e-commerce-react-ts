import { btnProps, btnTypes } from "../types";

const btnClass: btnTypes = {
  default: "bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black",
  google: "bg-[#4285f4] text-white hover:bg-[#357ae8] hover:text-white",
  inverted:
    "bg-white text-black border border-black hover:bg-black hover:text-white hover:border-0",
};

const Button = (props: btnProps) => {
  const { children, buttonType, ...otherProps } = props;
  return (
    <button
      className={`flex h-[50px] w-auto min-w-[165px] cursor-pointer justify-center px-9 font-bold uppercase leading-[50px] ${btnClass[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
