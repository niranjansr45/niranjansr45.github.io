import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavForLoginSignUp = ({ selected }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-dark">
        <div className="container pt-3">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="200" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            style={{ marginLeft: "20%" }}
          >
           
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <button
               style={{
                // height: "360px",
                // width: window.screen.width > 700 ? "40%" : "90%",
                marginLeft: "auto",
                // marginRight: "auto",
              }}
                onClick={() => {
                  if (
                    window.location.href.includes("contact") ||
                    window.location.href.includes("analysed")
                  ) {
                    navigate("/register");
                  } else selected();
                }}
                className="btn btn-outline-light"
              >
                Register
              </button>
              
           

            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavForLoginSignUp;
