import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo9.png";
import useUserStore from "@/store/user";
import { removeToken } from "@/helper";
import { Popover } from "antd";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, setUser } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const signUpStudentBtnClick = () => navigate("/signup/student");
  const signUpMentorBtnClick = () => navigate("/signup/mentor");
  const signInBtnClick = () => navigate("/signin");

  const onLogoutButtonClick = () => {
    removeToken();
    setUser(null);
    toast.success("Logged out successfully ");
    navigate("/");
  };

  const profileContent = (
    <div className="w-64 p-5 rounded-2xl bg-gradient-to-r from-green-950 via-green-900 to-green-950 shadow-xl border  animate-dropdown">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 flex items-center justify-center
        rounded-full bg-[#DAA520] text-white font-bold text-lg"
        >
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="font-semibold text-white">{user?.name}</p>
          <p className="text-sm text-[#DAA520]">{user?.email}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#D1DCCF] mb-4" />

      {/* Actions */}
      
      <NavLink
        to="/dashboard/profile"
        className="block px-3 py-2 rounded-lg text-[#1E2B1C]
      hover:bg-[#D1DCCF] transition"
      >
        Dashboard
      </NavLink>

      <button
        onClick={onLogoutButtonClick}
        className="w-full text-left px-3 py-2 rounded-lg
      text-red-600 hover:bg-red-50 transition"
      >
        Logout
      </button>
    </div>
  );

  return (
    <>
      <div className="bg-gradient-to-r from-green-950 via-green-900 to-green-950 shadow-xl sticky top-0 z-50">
        <div className="px-4 py-4 mx-auto max-w-screen-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="inline-flex items-center gap-2">
              {/* <span className="text-2xl font-extrabold text-yellow-400 tracking-wide">
                DeepSkill
              </span> */}

              <img src={logo} alt="DeepSkill Logo" className="h-13 w-auto" />
            </NavLink>

            {/* Mobile menu button */}

            {!user && (
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-yellow-400 text-3xl focus:outline-none"
                >
                  &#9776;
                </button>
              </div>
            )}

            {/* Desktop Menu */}

            {!user ? (
              <ul className="hidden lg:flex items-center space-x-6">
                <li>
                  <button
                    onClick={signUpMentorBtnClick}
                    className="h-12 px-6 rounded-full font-semibold text-green-900
                  bg-gradient-to-r from-yellow-400 via-yellow-300 to-lime-400
                  hover:from-yellow-300 hover:to-lime-500
                  transition-all duration-300
                  hover:shadow-[0_0_15px_rgba(250,204,21,0.8)]
                  hover:-translate-y-0.5"
                  >
                    Become a Mentor
                  </button>
                </li>

                <li>
                  <button
                    onClick={signInBtnClick}
                    className="text-yellow-300 font-medium hover:text-yellow-400 transition"
                  >
                    Sign in
                  </button>
                </li>

                <li>
                  <button
                    onClick={signUpStudentBtnClick}
                    className="h-12 px-6 rounded-full font-semibold text-green-950
                  bg-gradient-to-r from-yellow-500 to-yellow-300
                  hover:to-yellow-400
                  transition-all duration-300
                  shadow-lg hover:shadow-yellow-400/40"
                  >
                    Sign up
                  </button>
                </li>
              </ul>
            ) : (
              <Popover
                content={profileContent}
                trigger="click"
                placement="bottomRight"
                overlayClassName="profile-popover"
              >
                <div className="relative cursor-pointer group">
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-full bg-[#DAA520]
      opacity-0 group-hover:opacity-30 blur-md
      transition duration-300"
                  ></div>

                  {/* Avatar */}
                  <div
                    className="w-11 h-11 flex items-center justify-center
      rounded-full
      bg-[#DAA520]
      text-white font-bold text-lg
      shadow-md
      transition-all duration-300
      group-hover:scale-105"
                  >
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                </div>
              </Popover>
            )}
          </div>

          {/* Mobile Menu */}

          {!user && isOpen && (
            <div
              className={`lg:hidden mt-4 transform transition-all duration-300 ${
                isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 hidden"
              }`}
            >
              <div className="bg-green-900 rounded-xl p-4 space-y-4 shadow-lg">
                <button
                  className="w-full py-3 rounded-lg font-semibold text-green-900
                bg-gradient-to-r from-yellow-400 to-lime-400
                hover:from-yellow-300 hover:to-lime-500
                transition-all duration-300"
                >
                  Become a Mentor
                </button>

                <button className="w-full py-2 text-yellow-300 hover:text-yellow-400 transition">
                  Sign in
                </button>

                <button
                  className="w-full py-3 rounded-lg font-semibold text-green-950
                bg-gradient-to-r from-yellow-500 to-yellow-300
                hover:to-yellow-400 transition"
                >
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
