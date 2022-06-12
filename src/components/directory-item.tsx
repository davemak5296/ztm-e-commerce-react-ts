import { Link } from "react-router-dom";
import { categoryItemProps } from "../types";

const DirectoryItem = (props: categoryItemProps) => {
  const { title, imageUrl } = props.category;
  return (
    <div className="group m-0 mx-[7.5px] mb-[15px] flex h-60 min-w-[30%] flex-auto items-center justify-center overflow-hidden border border-solid border-black first:mr-[7.5px] last:ml-[7.5px] hover:cursor-pointer">
      <div
        className="h-full w-full transform bg-cover bg-center group-hover:scale-110 group-hover:transition-transform group-hover:duration-[6000ms] group-hover:ease-[cubic-bezier(0.25,0.45,0.45,0.95)]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="absolute flex h-24 flex-col items-center justify-center border border-solid border-black bg-white py-0 px-6 opacity-70 group-hover:opacity-90">
        <Link to={`/shop/${title.toLowerCase()}`}>
          <h2 className="my-0 mx-1.5 text-2xl font-bold text-[#4a4a4a]">{title}</h2>
          <p className="text-base font-light">Shop Now!</p>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
