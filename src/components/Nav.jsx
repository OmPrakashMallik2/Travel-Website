import { Button } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [showMenuItem, setShowMenuItem] = useState(false);
  const navigate = useNavigate();

  const closeOpenNav = () => {
    setShowMenuItem(false);
  }

  return (
    <div className='flex fixed top-0 w-full justify-between p-3 lg:px-36 lg:py-5 bg-white bg-opacity-70 z-50'>

      <div className="items-center cursor-pointer" onClick={() => { navigate('/'); closeOpenNav() }}>
        <h1 className="font-black text-4xl" >TRAVEL</h1>
      </div>

      <div className="bg-white bg-opacity-70 lg:bg-opacity-50 rounded-sm pl-3">

        {/* For small screens, show/hide navigation links */}
        <div className="lg:hidden flex flex-col gap-5 items-end">

          <Button variant="text" className="text-black" onClick={() => setShowMenuItem(!showMenuItem)}>
            {showMenuItem ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </Button>

          {showMenuItem && (
            <div className="flex flex-col items-end text-xl font-bold gap-8 pr-4 pb-5">
              <Link to='/' onClick={closeOpenNav} className="">HOME</Link>
              <Link to='/packages' onClick={closeOpenNav} className="">ABOUT</Link>
              <Link to='/packages' onClick={closeOpenNav} className="">PACKAGES</Link>
              <Link to='/packages' onClick={closeOpenNav} className="">CONTACT</Link>
              <Button variant="contained" size="large" onClick={() => { navigate('/login'); closeOpenNav() }} className="">Login</Button>
            </div>
          )}
        </div>

        {/* For large screens, display navigation links */}
        <div className="hidden lg:flex justify-end items-center text-lg font-semibold gap-10">
          <Link to='/'>HOME</Link>
          <Link to='/packages'>ABOUT</Link>
          <Link to='/packages'>TOUR PACKAGES</Link>
          <Link to='/packages'>CONTACT</Link>
          <Button variant="contained" size="large" onClick={() => navigate('/login')}>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
