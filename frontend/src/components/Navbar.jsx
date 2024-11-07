import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { signOut } from '../store/userSlice.js'


const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className="navbar bg-primary text-white sticky top-0 w-full shadow-lg z-50">
      <div className="flex-1">
        <div className="tabs">
          <Link to="/" className="tab tab-bordered font-bold text-lg mx-2">
            Home
          </Link>
          <Link to="/friends" className="tab tab-bordered font-bold text-lg mx-2">
            Friends
          </Link>
          <Link to="/profile" className="tab tab-bordered font-bold text-lg mx-2">
            Profile
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <a className="btn btn-ghost font-bold" onClick={() => dispatch(signOut())}>
          Log Out
        </a>
      </div>
    </div>
  );
};


export default Navbar;
