import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import MainFooter from "../main-footer/main-footer";
// import Form from "../addevents/addevents";

export default function Home() {
  return (
    <>
    <div id="home-container">
      <div id="home-page">
        <div className="heading">
          <p>
            Welcome <br /> to EventHub
          </p>
        </div>

        <div className="summary">
          <p>Where event lovers </p>
          <p>
            go to keep the party going.
            <br />
            <Link to="/addevent">
              <button id="home">Get started</button>
            </Link>
          </p>
        </div>
      </div>
    </div>

    {/* <Form/> */}
    <MainFooter/>
    </>
  );
}
