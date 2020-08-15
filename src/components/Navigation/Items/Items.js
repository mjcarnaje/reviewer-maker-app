import React from "react";

import NavigationItem from "./Item/Item";

const navigationItems = (props) => (
  <ul className="m-0 p-0 flex list-none">
    <NavigationItem link="#" active>
      Home
    </NavigationItem>
    <NavigationItem link="#">Play</NavigationItem>
    <NavigationItem link="#">Questions</NavigationItem>
  </ul>
);

export default navigationItems;
