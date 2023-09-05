import React from "react";
import { NavbarData2 } from "../data";

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md sticky-top bg-secondary navbar-dark py-3 ">
          <div className="container ">
            <h1 className="navbar-brand">Gourmet au Catering</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsenavbar"
              style={{marginTop:"-.5rem"}}
            >
              <span className="navbar-toggler-icon " style={{marginTop:"-.3rem"}}></span>
            </button>
            <div
              className="collapse navbar-collapse text-center"
              id="collapsenavbar"
            >
              <ul className="navbar-nav ml-auto font-weight-bold ">
                {NavbarData2.lists.map((ele) => {
                  return (
                    <li
                      className="nav-item"
                      style={{ fontSize: "18px", letterSpacing: "4px" }}
                    >
                      <a href="" className="nav-link text-white ml-sm-5">
                        {ele}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
