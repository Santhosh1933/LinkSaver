import { Select } from "@chakra-ui/react";
import React from "react";

export const HeroMenus = () => {
  return (
    <div className="w-full p-4">
      <div>
        <h1 className="title">Categories :</h1>
        <div className="py-8">
          <button className="border-2 border-secondary py-1 px-4 rounded-full">All</button>
        </div>
      </div>
    </div>
  );
};
