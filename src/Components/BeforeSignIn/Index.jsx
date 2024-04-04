import React from "react";
import { useNavigate } from "react-router-dom";
import { NavigationRoutes } from "../../../Constant";

export const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg flex flex-col gap-4 justify-center items-center">
          <h1 className="text-4xl font-bold text-success">
            Welcome to Link Organizer
          </h1>
          <h2 className="text-lg font-bold text-accent">
            Your Ultimate Link Management Solution!
          </h2>
          <p className="">
            Say goodbye to scattered links and hello to simplicity with
            LinkOrganizer! Effortlessly organize all your links in one place,
            neatly split by categories that make sense to you. Access your links
            anytime, anywhere with our intuitive platform. Join now and take
            control of your links like never before!
          </p>
          <button
            className="btn btn-accent"
            onClick={() => navigate(NavigationRoutes.Home)}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
