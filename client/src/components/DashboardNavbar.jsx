import React from "react";
import { removeToken } from "@/helper";
import useUserStore from "@/store/user";
import { FiLogOut } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo9.png";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const onButtonClick = () => {
    removeToken();
    setUser(null);
    navigate("/");
  };

  return (
    <div
      className="w-full border-b border-yellow-400/20
      bg-gradient-to-r from-green-950 via-green-900 to-green-950
      backdrop-blur-xl"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <NavLink to="/" className="inline-flex items-center gap-2">
            <img
              src={logo}
              alt="DeepSkill Logo"
              className="h-12 w-auto"
            />
          </NavLink>

          {/* Logout Button */}
          <button
            onClick={onButtonClick}
            className="flex items-center gap-2 px-6 py-2
            rounded-full text-green-950 font-semibold
            bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
            transition-all duration-300
            hover:from-yellow-300 hover:to-lime-500
            hover:shadow-[0_0_20px_rgba(250,204,21,0.8)]
            hover:-translate-y-0.5"
          >
            <span>Log Out</span>
            <FiLogOut className="text-lg" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
