import { Button } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

function Nav() {
  const [showMenuItem, setShowMenuItem] = useState(false);

  return (
    <div className='flex fixed top-0 w-full justify-between'>

      <div>
        <h1 className="font-black text-4xl">LOGO</h1>
      </div>

      <div className="bg-white">

        {/* For small screens, show/hide navigation links */}
        <div className="lg:hidden flex flex-col items-end">

          <Button variant="contained" onClick={() => setShowMenuItem(!showMenuItem)}>
            {showMenuItem ? <CloseIcon /> : <MenuIcon />}
          </Button>

          {showMenuItem && (
            <div className="flex flex-col items-end">
              <Link className="">HOME</Link>
              <Link className="">ABOUT</Link>
              <Link className="">TOUR PACKAGES</Link>
              <Link className="">CONTACT</Link>
              <Button variant="contained" className="">Login</Button>
            </div>
          )}
        </div>

        {/* For large screens, display navigation links */}
        <div className="hidden lg:flex justify-end items-center text-md font-semibold gap-10">
          <Link>HOME</Link>
          <Link>ABOUT</Link>
          <Link>TOUR PACKAGES</Link>
          <Link>CONTACT</Link>
          <Button variant="contained">Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
