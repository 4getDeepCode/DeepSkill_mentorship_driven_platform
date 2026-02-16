// import useUserStore from '@/store/user';
// import React from 'react'
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   const { user } = useUserStore();
//   return (
//     <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-gradient-to-r from-indigo-50 to-white border-r">
//       <div className="flex flex-col items-center mt-6 -mx-2">
//         <img
//           className="object-cover w-24 h-24 mx-2 rounded-full shadow-lg"
//           src={user.photoUrl || `https://ui-avatars.com/api?name=${user?.name}`}
//           alt={`${user?.name}'s avatar`}
//         />
//         <h4 className="mx-2 mt-2 font-medium text-gray-800">{user?.name}</h4>
//         <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
//           {user?.email}
//         </p>
//       </div>
//       <div className="flex flex-col justify-between flex-1 mt-6">
//         <nav>
//           {/* Profile - Accessible to all */}
//           <NavLink
//             to="/dashboard/profile"
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 mb-4 rounded-lg transition-all duration-300 transform ${
//                 isActive
//                   ? "bg-orange-200 text-gray-800 shadow-md"
//                   : "text-gray-600 hover:bg-orange-100 hover:text-gray-800"
//               }`
//             }
//           >
//             <span className="mx-4 font-medium">Profile</span>
//           </NavLink>

//           {/* Services - Only for Mentors */}
//           {user?.role === "mentor" && (
//             <NavLink
//               to="/dashboard/services"
//               className={({ isActive }) =>
//                 `flex items-center px-4 py-2 mb-4 rounded-lg transition-all duration-300 transform ${
//                   isActive
//                     ? "bg-orange-200 text-gray-800 shadow-md"
//                     : "text-gray-600 hover:bg-orange-100 hover:text-gray-800"
//                 }`
//               }
//             >
//               <span className="mx-4 font-medium">Services</span>
//             </NavLink>
//           )}

//           {/* Schedule - Only for Mentors */}
//           {user?.role === "mentor" && (
//             <NavLink
//               to="/dashboard/schedule"
//               className={({ isActive }) =>
//                 `flex items-center px-4 py-2 mb-4 rounded-lg transition-all duration-300 transform ${
//                   isActive
//                     ? "bg-orange-200 text-gray-800 shadow-md"
//                     : "text-gray-600 hover:bg-orange-100 hover:text-gray-800"
//                 }`
//               }
//             >
//               <span className="mx-4 font-medium">Schedule</span>
//             </NavLink>
//           )}

//           {/* Bookings - Accessible to both */}
//           {user?.role === "mentor" && (
//           <NavLink
//             to="/dashboard/bookings"
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 mb-4 rounded-lg transition-all duration-300 transform ${
//                 isActive
//                   ? "bg-orange-200 text-gray-800 shadow-md"
//                   : "text-gray-600 hover:bg-orange-100 hover:text-gray-800"
//               }`
//             }
//           >
//             <span className="mx-4 font-medium">Bookings</span>
//           </NavLink>)}
//           {/* Payment - Accessible to both */}
//           {user?.role === "mentor" && (
//           <NavLink
//             to="/dashboard/payment"
//             className={({ isActive }) =>
//               `flex items-center px-4 py-2 mb-4 rounded-lg transition-all duration-300 transform ${
//                 isActive
//                   ? "bg-orange-200 text-gray-800 shadow-md"
//                   : "text-gray-600 hover:bg-orange-100 hover:text-gray-800"
//               }`
//             }
//           >
//             <span className="mx-4 font-medium">Payment</span>
//           </NavLink>
//             )}
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


import useUserStore from "@/store/user";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { user } = useUserStore();

  return (
    <aside
      className="flex flex-col w-64  px-6 py-8 min-h-screen
      bg-gradient-to-b from-green-950 via-green-900 to-green-950
      border-r border-yellow-400/20"
    >
      {/* User Info */}
      <div className="flex flex-col items-center mt-6">
        <img
          className="object-cover w-24 h-24 rounded-full
          border-2 border-yellow-400/40
          shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          src={
            user.photoUrl ||
            `https://ui-avatars.com/api?name=${user?.name}`
          }
          alt={`${user?.name}'s avatar`}
        />
        <h4 className="mt-4 text-lg font-semibold text-yellow-300">
          {user?.name}
        </h4>
        <p className="mt-1 text-sm text-yellow-200/70">
          {user?.email}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col justify-between flex-1 mt-10">
        <nav className="space-y-3">

          {/* Profile */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? "bg-yellow-400/10 text-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                  : "text-yellow-200/80 hover:bg-yellow-400/10 hover:text-yellow-300"
              }`
            }
          >
            Profile
          </NavLink>

          {/* Services */}
          {user?.role === "mentor" && (
            <NavLink
              to="/dashboard/services"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-400/10 text-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                    : "text-yellow-200/80 hover:bg-yellow-400/10 hover:text-yellow-300"
                }`
              }
            >
              Services
            </NavLink>
          )}

          {/* Schedule */}
          {user?.role === "mentor" && (
            <NavLink
              to="/dashboard/schedule"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-400/10 text-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                    : "text-yellow-200/80 hover:bg-yellow-400/10 hover:text-yellow-300"
                }`
              }
            >
              Schedule
            </NavLink>
          )}

          {/* Bookings */}
          {user?.role === "mentor" && (
            <NavLink
              to="/dashboard/bookings"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-400/10 text-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                    : "text-yellow-200/80 hover:bg-yellow-400/10 hover:text-yellow-300"
                }`
              }
            >
              Bookings
            </NavLink>
          )}

          {/* Payment */}
          {user?.role === "mentor" && (
            <NavLink
              to="/dashboard/payment"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-400/10 text-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.3)]"
                    : "text-yellow-200/80 hover:bg-yellow-400/10 hover:text-yellow-300"
                }`
              }
            >
              Payment
            </NavLink>
          )}

        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;


