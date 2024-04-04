import React from "react";
import { IconPickerComponent } from "./IconPickerComponent";
import { Sidebar } from "../Sidebar";
import { AppName } from "../../../../Constant";
import { Topbar } from "../Topbar";
import { HeroMenus } from "./HeroMenus";

export const Home = () => {
  return (
    <div className="w-full">
      <Topbar />
      <section className="flex items-start">
        <section className=" sm:w-[30%] md:w-[20%]">
          <Sidebar />
        </section>
        <section className="mx-auto w-full flex flex-col max-w-6xl  gap-8 py-8">
          <div className="logo hidden sm:block">{AppName}</div>
          <div className=" p-4">
            <HeroMenus />
          </div>
        </section>
      </section>
    </div>
  );
};
