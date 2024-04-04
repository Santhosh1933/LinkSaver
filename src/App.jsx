import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./Components/BeforeSignIn/Index";
import { Home } from "./Components/AfterSignIn/Home/Home";
import { NavigationRoutes } from "../Constant";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} path={NavigationRoutes.BeforeSignIn} />
          <Route element={<Home />} path={NavigationRoutes.Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
