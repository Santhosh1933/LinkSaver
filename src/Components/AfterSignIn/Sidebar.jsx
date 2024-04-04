import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoIosHome } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { NavigationRoutes } from "../../../Constant";


export const Sidebar = () => {
  const navigate = useNavigate();

  const Menus = [
    {
      name: "Home",
      icon: <IoIosHome size={20} />,
      route: NavigationRoutes.Home,
    },
    {
      name: "Collaboration",
      icon: <MdGroup size={20} />,
      route: NavigationRoutes.Home,
    },
  ];

  return (
    <div className="sm:bg-slate-800  h-screen ">
      <div className="py-8 h-full">
        {/* Mobile View */}
        <div className="sm:flex flex-col justify-between hidden h-full">
          {/* Desktop View */}
          <ul className=" flex flex-col gap-8 px-4  ">
            {Menus.map((data, i) => (
              <div key={i}>
                <li
                  className="text-white hover:translate-x-2 transition-all flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate(data.route)}
                >
                  {data.name}
                  {data.icon}
                </li>
              </div>
            ))}
          </ul>
          <button
            className="btn btn-secondary text-lg m-4 text-white flex items-center gap-2 cursor-pointer"
            onClick={() => navigate(NavigationRoutes.Home)}
          >
            Logout <IoMdLogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
