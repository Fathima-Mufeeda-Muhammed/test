import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-sky-800 bg-opacity-80">
      <div className="flex gap-5 w-full max-w-xs">
        <Link to="/">
          <button className="mx-16  text-xl  font-extrabold text-white bg-transparent hover:text-white hover:bg-black hover:bg-opacity-50 hover:backdrop-blur-md transition duration-300 px-6 py-3 rounded font-serif">
            Home
          </button>
        </Link>
        <Link to="/research">
          <button className="mx-16  text-xl  font-extrabold text-white bg-transparent hover:text-white hover:bg-black hover:bg-opacity-50 hover:backdrop-blur-md transition duration-300 px-6 py-3 rounded font-serif">
            Research
          </button>
        </Link>
        <Link to="/product">
          <button className="mx-16 text-xl  font-extrabold text-white bg-transparent hover:text-white hover:bg-black hover:bg-opacity-50 hover:backdrop-blur-md transition duration-300 px-6 py-3 rounded font-serif">
            Product
          </button>
        </Link>
        <Link to="/developers">
          <button className="mx-16  text-xl  font-extrabold  text-white bg-transparent hover:text-white hover:bg-black hover:bg-opacity-50 hover:backdrop-blur-md transition duration-300 px-6 py-3 rounded font-serif">
            Developers
          </button>
        </Link>
        <Link to="/safety">
          <button className="mx-16  text-xl  font-extrabold text-white bg-transparent hover:text-white hover:bg-black hover:bg-opacity-50 hover:backdrop-blur-md transition duration-300 px-6 py-3 rounded font-serif">
            Safety
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
