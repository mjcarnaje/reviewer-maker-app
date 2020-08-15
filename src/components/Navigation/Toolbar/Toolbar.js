import React from "react";
import NavigationItems from "../Items/Items";

const toolBar = (props) => (
  <nav className="w-full h-24 fixed top-0 left-0 lg:px-20 md:px-12 px-10 py-0 z-100 border-b border-gray-300 flex bg-white">
    <h1 className="flex items-center flex-shrink-0 mr-10 font-berkshire text-5xl font-hairline text-custom-primary flex-grow lg:flex-grow-0">
      ReviewerMaker
    </h1>
    <div className="flex lg:hidden justify-end">
      <button className="flex items-center py-2 text-custom-primary border-custom-primary-400">
        <svg
          className="fill-current h-12 w-12"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <NavigationItems />
  </nav>
);

export default toolBar;
