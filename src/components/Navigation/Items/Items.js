import React from "react";

import NavigationItem from "./Item/Item";

const navigationItems = (props) => (
  <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto text-2.5xl justify-end">
    <NavigationItem link="#" active>
      Home
    </NavigationItem>
    <NavigationItem link="#">Play</NavigationItem>
    <NavigationItem link="#" last>
      Questions
    </NavigationItem>
  </div>
);

export default navigationItems;
