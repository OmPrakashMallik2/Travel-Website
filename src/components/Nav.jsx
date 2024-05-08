import { Button } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Nav() {
  const [showMenuItem, setShowMenuItem] = useState(false);

  return (
    <div className='flex fixed w-full top-0 items-center justify-between bg-white lg:px-36 lg:py-6 p-5 opacity-60'>


      <div>
        <h1 className="font-black text-4xl">LOGO</h1>
      </div>


      {/* For small screens, show/hide navigation links */}
      <div className="lg:hidden flex flex-col items-center">

        <Button variant="contained" onClick={() => setShowMenuItem(!showMenuItem)}>
          {showMenuItem ? <CloseIcon /> : <MenuIcon />}
        </Button>

        {showMenuItem && (
          <div className="flex flex-col">
            <a href="#" className="">HOME</a>
            <a href="#" className="">ABOUT</a>
            <a href="#" className="">TOUR PACKAGES</a>
            <a href="#" className="">CONTACT</a>
            <Button variant="contained" className="">Login</Button>
          </div>
        )}
      </div>

      {/* For large screens, display navigation links */}
      <div className="hidden lg:flex justify-end items-center text-md font-semibold">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">TOUR PACKAGES</a>
        <a href="#">CONTACT</a>
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
}

export default Nav;
