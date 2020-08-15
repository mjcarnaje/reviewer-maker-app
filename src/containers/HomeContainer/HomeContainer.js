import React, { Component } from "react";
import "./HomeContainer.scss";

import Auxiliary from "../../hoc/Auxiliary";
import image01 from "../../assets/svg/image.svg";
import Button from "../../components/UI/Button/Button";

class HomeContainer extends Component {
  render() {
    return (
      <Auxiliary>
        <div className="home">
          <div className="home__left">
            <h1 className="home__heading">
              All-in-one online <br /> reviewer app <br /> maker
            </h1>
            <p className="home__paragraph">
              Make your own question and practice, for free.
            </p>
            <Button classes="btn btn--home">Get started</Button>
          </div>
          <div className="home__img">
            <img src={image01} alt="male-study" />
          </div>
        </div>
      </Auxiliary>
    );
  }
}

export default HomeContainer;
