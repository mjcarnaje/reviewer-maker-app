import React from "react";
import NavigationItems from "../Items/Items";

const toolBar = (props) => (
  <header className="w-full h-24 fixed top-0 left-0 px-20 py-0 z-50 border-b border-gray-200 flex items-center justify-between">
    <h1 className="font-berkshire text-5xl font-hairline text-custom-primary">
      ReviewerMaker
    </h1>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolBar;
