import React, { useEffect, useState } from "react";
import { HiShoppingCart, HiUserCircle } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";
import { useAppStore } from "../../../store/appStore";
import API from "../../../utils/axios";

const Header = () => {
  const { user, totalCart } = useAppStore();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const getCartNumber = async () => {
    try {
      const { data } = await API("/api/user/get-user-cart-number");
      useAppStore.setState({ totalCart: data });
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (user) {
      getCartNumber();
    }
  }, [user]);

  return (
    <header className="bg-accentureBlack z-10 border-b-[1px] border-accenturePurple sticky top-0 text-white backdrop-blur-lg px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-4">
        <img
          src="https://companieslogo.com/img/orig/ACN-cce5b411.png?t=1720244490"
          alt="Accenture Logo"
          width="35px"
          className="hover:scale-110 transition-transform duration-200"
        />
        <h2
          onClick={() => navigate("/")}
          className="text-3xl font-semibold font-sans cursor-pointer tracking-wider sm:tracking-widest space-y-[1px] text-white transition-colors duration-200"
        >
          <p className="tracking-tight">Accenture Edge</p>
        </h2>
      </div>
      <div className="flex-1 hidden sm:flex justify-center">
        <ul className="flex items-center gap-6 text-lg font-semibold">
          <li>
            <NavLink
              to={"/info"}
              className={({ isActive }) => (isActive ? "text-accenturePurple" : "text-white")}
            >
              <div className="text-2xl hover:text-accenturePurple transition-colors duration-200">
                Home
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6 text-xl relative">
        <NavLink
          to={"/cart"}
          className={({ isActive }) => (isActive ? "text-accenturePurple" : "text-white")}
        >
          <HiShoppingCart
            className="cursor-pointer relative hover:scale-110 transition-transform duration-200"
            size={30}
            color="white"
          />
          {user && (
            <button className="absolute top-[-10px] w-6 h-6 left-4 rounded-full bg-accenturePurple text-black border-[1px] border-white text-center">
              <span className="translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
                {totalCart}
              </span>
            </button>
          )}
        </NavLink>
        {user ? (
          <HiUserCircle
            color="white"
            className="cursor-pointer hover:scale-110 transition-transform duration-200"
            size={30}
            onClick={() => setShowMenu((pre) => !pre)}
          />
        ) : (
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "text-accenturePurple" : "text-white")}
          >
            <HiUserCircle className="cursor-pointer hover:scale-110 transition-transform duration-200" size={30} />
          </NavLink>
        )}

        {showMenu && <UserMenu setShowMenu={setShowMenu} />}
      </div>
    </header>
  );
};

export default Header;
