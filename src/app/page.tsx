import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "@/components/ui/custom/NavBar";

const page = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-16 mx-auto">
      <Navbar />
      <div>
        <Home />
      </div>
    </div>
  );
};

export default page;
