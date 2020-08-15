import React, { Component } from "react";
import Auxiliary from "../Auxiliary";
import "./Layout.scss";
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <Auxiliary>
        <div>
          <ToolBar />
          <main>{this.props.children}</main>
        </div>
      </Auxiliary>
    );
  }
}

export default Layout;