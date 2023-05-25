import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import logo from '../../assets/marvelous-1.png'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  const navMenu = (
    <div className="md:flex md:space-x-5">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allToys" className={({ isActive }) => (isActive ? "active" : "")}>All Toys</NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active" : "")}>Blogs</NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/myToy">My Toys</NavLink>
          </li>
          <li>
            {" "}
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/addatoy">Add A Toy</NavLink>
          </li>
        </>
      )}
      {
        user?.email ? ' ': <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/resister">Resister</NavLink>
      </li>
      }
    </div>
  );
  return (
    <div id="header" className="navbar h-28 bg-[#171717] text-white">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#171717] rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <a className="">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu  px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end mr-2 md:mr-12">
        {user ? (
          <>
            <button className="mr-2 custom-primary-btn" onClick={handleLogOut}>
              LogOut
            </button>
            <label
              tabIndex={0}
              className="btn btn-ghost border border-orange-400 border-b-2 btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} title={user?.displayName} />
              </div>
            </label>
          </>
        ) : (
          <>
            <NavLink className="text-lg font-medium" to="/login" >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
