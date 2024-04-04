import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

import { IoIosHome } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AppName, NavigationRoutes } from "../../../Constant";
export const Topbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
    <div className="visible sm:hidden">
      <div className="flex items-center bg-secondary-content py-4">
        <button ref={btnRef} className="" onClick={onOpen}>
          <GiHamburgerMenu size={24} className=" visible mx-4 sm:hidden" />
        </button>
        <div className="logo mx-auto">{AppName}</div>
      </div>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent className="bg-slate-800">
          <DrawerHeader borderBottomWidth="1px" className="logo">
            {AppName}
          </DrawerHeader>
          <DrawerBody className="bg-slate-800">
            <div className="flex flex-col justify-between   h-full">
              {/* Desktop View */}
              <ul className=" flex flex-col gap-8 p-4  ">
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
          </DrawerBody>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </div>
  );
};
