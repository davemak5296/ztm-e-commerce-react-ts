import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../assets/crown.svg";
import { signOutUser } from "../utils/firebase/firebase.utils";
import { UserContext } from "../contexts/user.context";
import { userContextType } from "../types";
import "../main.css";

const Navigation = () => {
  const { currUser } = useContext(UserContext) as userContextType;
  // console.log(currUserObj?.setCurrUser(null));

  return (
    <>
      <nav className="mb-6 flex h-[70px] w-full justify-between">
        {/* logo */}
        <Link to="/" className="h-full w-[70px] p-6">
          {/* <Link to="/" className="p-6"> */}
          <Crwnlogo className="" />
        </Link>
        {/* links */}
        <div className="flex h-full w-6/12 items-center justify-end">
          <Link to="/shop" className="py-2.5 px-3.5">
            Shop
          </Link>
          <Link to="/shop" className="py-2.5 px-3.5">
            CONTACT
          </Link>
          {currUser ? (
            <span onClick={signOutUser} className="py-2.5 px-3.5">
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="py-2.5 px-3.5">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      {/* other components */}
      <Outlet />
    </>
  );
};

export default Navigation;
