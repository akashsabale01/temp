import React from "react";
import authServiceInstance from "../../Services/AuthService";
import { Link } from "react-router-dom";

const Navbar = ({ user,logout }) => {

  // const logout = () => {
  //   authServiceInstance.logout();
  //   setUser(null);
  // };


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Book Rooms</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <a className="text-xl">LakeSide</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link to="/">
            Home
          </Link>
          </li>
          <li>
            <a>Book Rooms</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="ms-2">Welcome, {user.email}</span>
            <button onClick={logout} className="btn btn-secondary ms-2 btn-sm">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary ms-2 btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
