import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import NavTop from "./NavTop";
import "../../src/assets/css/Details.css";
import "font-awesome/css/font-awesome.min.css";





const Details = (file) => {
  const select = useRef(null);

  return (
    <>
      <div className="cont">
        <NavTop selected={() => select.current.click()} />
        <hr style={{ borderTop: "1px solid white" }} />
        <div
          className="section d-flex flex-column align-items-center justify-content-center"
          style={{ width: "80%", margin: "0 auto" }}
        >
          {/* %%%%%%%%%%%%%%% inner navbar section %%%%%%%%%%%%%%%%%%% */}
          <div
            className="sectionTop mt-4 d-flex flex-md-row flex-column align-items-center justify-content-evenly"
            style={{ width: "100%" }}
          >
            <div className="secLogo d-flex justify-items-center align-items-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <i className="logo fa fa-file-text-o"></i>
              </div>
              <div className="logoHeading">
                <h5>{file.name}</h5>
                <p>01/28/22</p>
              </div>
            </div>
            <div
              className="secDropdowns d-flex justify-content-evenly"
              style={{ width: "35%", height: "40px" }}
            >
              <input
                style={{ backgroundColor: "#E9FFE4", color: "#128C7E" }}
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
              />

              <input
                style={{ backgroundColor: "#E9FFE4", color: "#128C7E" }}
                type="date"
                id="end"
                name="trip-start"
                value="2018-07-22"
              />
            </div>
            <div className="secButton" style={{ width: "20%" }}>
              <button
                className="baton"
                style={{
                  height: "7vh",
                  width: "100%",
                  backgroundColor: "#128C7E",
                  color: "white",
                }}
              >
                Continue to Orders
              </button>
            </div>
          </div>

          {/* %%%%%%%%%%%%%%%Cards section %%%%%%%%%%%%%%%%%%% */}
          <div className="secCards mt-5 d-flex flex-md-row flex-column">
            <div
              className="card1 d-flex justify-content-center align-items-center"
              style={{ height: "125px", width: "135px" }}
            >
              <div
                className="washi d-flex justify-content-center align-items-center flex-column"
                style={{ width: "80%" }}
              >
                <h2 className="card-title ">
                  <b>532</b>
                </h2>
                <p className="card-text">Messages</p>
              </div>
            </div>

            <div
              className="card1 d-flex justify-content-center align-items-center"
              style={{ height: "125px", width: "135px" }}
            >
              <div
                className="washi d-flex justify-content-center align-items-center flex-column"
                style={{ width: "80%" }}
              >
                <h2 className="card-title ">
                  <b>31</b>
                </h2>
                <p className="card-text">pictures</p>
              </div>
            </div>

            <div
              className="card1 d-flex justify-content-center align-items-center"
              style={{ height: "125px", width: "135px" }}
            >
              <div
                className="washi d-flex justify-content-center align-items-center flex-column"
                style={{ width: "80%" }}
              >
                <h2 className="card-title ">
                  <b>65</b>
                </h2>
                <p className="card-text">Audio</p>
              </div>
            </div>

            <div
              className="card1 d-flex justify-content-center align-items-center"
              style={{ height: "125px", width: "135px" }}
            >
              <div
                className="washi d-flex justify-content-center align-items-center flex-column"
                style={{ width: "80%" }}
              >
                <h2 className="card-title ">
                  <b>112</b>
                </h2>
                <p className="card-text">Emogis</p>
              </div>
            </div>

            <div
              className="card1 d-flex justify-content-center align-items-center"
              style={{ height: "125px", width: "135px" }}
            >
              <div
                className="washi d-flex justify-content-center align-items-center flex-column"
                style={{ width: "80%" }}
              >
                <h2 className="card-title ">
                  <b>98</b>
                </h2>
                <p className="card-text">links</p>
              </div>
            </div>
          </div>

          {/* %%%%%%%%%%%%%%% User time details section %%%%%%%%%%%%%%%%%%% */}

          <div className="userTimeDetails mt-5" style={{ width: "60%" }}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <p className="para1 mt-4" style={{ marginLeft: "15px" }}>
                    First Message
                  </p>
                  <h5 style={{ marginLeft: "10px", color: "#128C7E" }}>
                    13th September 2022
                  </h5>
                </div>

                <div className="col-md-6">
                  <p className="para1 mt-4" style={{ marginLeft: "15px" }}>
                    First Message
                  </p>
                  <h5 style={{ marginLeft: "10px", color: "#128C7E" }}>
                    13th September 2022
                  </h5>
                </div>

                <div className="col-md-6">
                  <p className="para1 mt-4" style={{ marginLeft: "15px" }}>
                    First Message
                  </p>
                  <h5 style={{ marginLeft: "10px", color: "#128C7E" }}>
                    13th September 2022
                  </h5>
                </div>

                <div className="col-md-6">
                  <p className="para1 mt-4" style={{ marginLeft: "15px" }}>
                    First Message
                  </p>
                  <h5 style={{ marginLeft: "10px", color: "#128C7E" }}>
                    13th September 2022
                  </h5>
                </div>

                <div className="col-md-6">
                  <p className="para1 mt-4" style={{ marginLeft: "15px" }}>
                    First Message
                  </p>
                  <h5 style={{ marginLeft: "10px", color: "#128C7E" }}>
                    13th September 2022
                  </h5>
                </div>

                <div className="col-md-6">
                  <p className="para1 mt-4" style={{ marginLeft: "15px" }}>
                    First Message
                  </p>
                  <h5 style={{ marginLeft: "10px", color: "#128C7E" }}>
                    13th September 2022
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* %%%%%%%%%%%%%%% User Name details section %%%%%%%%%%%%%%%%%%% */}

          <div className="userNameDetails mt-5" style={{ width: "60%" }}>
            <div className="container-fluid">
              <div className="row d-flex justify-content-between">
                <div className="kolum col-5 text-center">
                  <h5 className="mt-4" style={{ color: "#555555" }}>
                    First User Name <hr style={{ color: "#128C7E" }} />
                  </h5>

                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                </div>
                <div className="kolum col-5 text-center">
                  <h5 className="mt-4" style={{ color: "#555555" }}>
                    Second User Name <hr style={{ color: "#128C7E" }} />
                  </h5>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                  <div className="messageSent d-flex justify-content-between">
                    <p style={{ color: "#757575" }}>Messages Sent</p>
                    <p>232</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer selected={() => select.current.click()} />
    </>
  );
};

export default Details;