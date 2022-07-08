import React, { useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import "../assets/css/adminSetting.css";
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

function AdminSetting() {

  const navigate = useNavigate();

  const userId = {
   userType : jwt.decode(Cookies.get("token")).user_type
  }
  console.log(userId)
  
  if(userId.userType == 2){

  return (
    <>
      <div className="parent bg-primary">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#128C7E", height: "12vh", color: "white" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <h4 style={{ marginLeft: "70px" }}>Admin Setting</h4>
            </div>

            <div className="d-flex align-items-center">
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="40"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="row" style={{ height: "100vh" }}>
          <div
            className="col-md-3"
            style={{ height: "100vh", backgroundColor: "white" }}
          >
            <div className="buttons d-flex flex-column">
              <h5
                className="hovdiv d-flex align-items-center"
                style={{ height: "10vh", width: "100%" }}
              >
                 <a href="#" class="link-dark" style={{textDecoration:"none"}}>Order Details</a>
              </h5>
              <h5
                className="hovdiv d-flex align-items-center"
                style={{ height: "10vh", width: "100%" }}
              >
                <a href="#" class="link-dark" style={{textDecoration:"none"}}>Canceled order</a>
              </h5>
              <h5
                className="hovdiv d-flex align-items-center"
                style={{ height: "10vh", width: "100%" }}
              >
                 <a href="#" class="link-dark" style={{textDecoration:"none"}}>Complete Order</a>
              </h5>
            </div>
          </div>
          <div
            className="col-md-9 d-flex justify-content-center"
            style={{ backgroundColor: "#F6F6F6" }}
          >
            <div
              className="orderDetails d-flex justify-content-center mt-3"
              style={{
                width: "95%",
                borderRadius: "16px",
                backgroundColor: "white",
              }}
            >
              <div className="empty" style={{ width: "90%" }}>
                <div className="heading">
                  <h3 className="mt-4">Order Details</h3>
                </div>

                <div className="details bg-dark mt-4">
                  <div className="table2">
                    <table className="table table-borderless mt-4">
                      <tr style={{ backgroundColor: "white" }}>
                        <td className="orderno">
                          <b>Order No</b>
                        </td>

                        <td>
                          <b>Customer Name</b>
                        </td>
                        <td>
                          <b>Product</b>
                        </td>
                        <td>
                          <b>Status</b>
                        </td>
                        <td>
                          <b>Total Price</b>
                        </td>
                      </tr>

                      <tr>
                        <td className="orderno">
                          <p>
                            <b>#205S</b>
                          </p>
                        </td>

                        <td className="">
                          <p>Name here</p>
                          <p className="smallpara">zahid@gmail.com</p>
                        </td>
                        <td className="">
                          <p>Product Title Here</p>
                          <p className="smallpara">June 12th 2022, 10:00</p>
                        </td>
                        <td style={{ color: "#F2994A" }}>Pending</td>
                        <td>
                          <b>$1.5</b>
                        </td>
                      </tr>

                      <tr>
                        <td className="orderno">
                          {" "}
                          <p>
                            <b>#205S</b>
                          </p>
                        </td>

                        <td className="">
                          <p>Name here</p>
                          <p className="smallpara">zahid@gmail.com</p>
                        </td>
                        <td className="">
                          <p>Product Title Here</p>
                          <p className="smallpara">June 12th 2022, 10:00</p>
                        </td>
                        <td style={{ color: "#F2994A" }}>Pending</td>
                        <td>
                          <b>$1.5</b>
                        </td>
                      </tr>

                      <tr>
                        <td className="orderno">
                          {" "}
                          <p>
                            <b>#205S</b>
                          </p>
                        </td>

                        <td className="">
                          <p>Name here</p>
                          <p className="smallpara">zahid@gmail.com</p>
                        </td>
                        <td className="">
                          <p>Product Title Here</p>
                          <p className="smallpara">June 12th 2022, 10:00</p>
                        </td>
                        <td style={{ color: "#F2994A" }}>Pending</td>
                        <td>
                          <b>$1.5</b>
                        </td>
                      </tr>

                      <tr>
                        <td className="orderno">
                          {" "}
                          <p>
                            <b>#205S</b>
                          </p>
                        </td>

                        <td className="">
                          <p>Name here</p>
                          <p className="smallpara">zahid@gmail.com</p>
                        </td>
                        <td className="">
                          <p>Product Title Here</p>
                          <p className="smallpara">June 12th 2022, 10:00</p>
                        </td>
                        <td style={{ color: "#F2994A" }}>Pending</td>
                        <td>
                          <b>$1.5</b>
                        </td>
                      </tr>

                      <tr>
                        <td className="orderno">
                          {" "}
                          <p>
                            <b>#205S</b>
                          </p>
                        </td>

                        <td className="">
                          <p>Name here</p>
                          <p className="smallpara">zahid@gmail.com</p>
                        </td>
                        <td className="">
                          <p>Product Title Here</p>
                          <p className="smallpara">June 12th 2022, 10:00</p>
                        </td>
                        <td style={{ color: "#219653" }}>delivered</td>
                        <td>
                          <b>$1.5</b>
                        </td>
                      </tr>

                      <tr>
                        <td className="orderno">
                          {" "}
                          <p>
                            <b>#205S</b>
                          </p>
                        </td>

                        <td className="">
                          <p>Name here</p>
                          <p className="smallpara">zahid@gmail.com</p>
                        </td>
                        <td className="">
                          <p>Product Title Here</p>
                          <p className="smallpara">June 12th 2022, 10:00</p>
                        </td>
                        <td style={{ color: "#219653" }}>delivered</td>
                        <td>
                          <b>$1.5</b>
                        </td>
                      </tr>

                      <tr>
                        <td className="orderno">
                          {" "}
                          <p>
                            <b>#205S</b>
                          </p>
                        </td>

                        <td className="">
                          <p>Name here</p>
                          <p className="smallpara">zahid@gmail.com</p>
                        </td>
                        <td className="">
                          <p>Product Title Here</p>
                          <p className="smallpara">June 12th 2022, 10:00</p>
                        </td>
                        <td style={{ color: "#219653" }}>delivered</td>
                        <td>
                          <b>$1.5</b>
                        </td>
                      </tr>

                      <tr>
                        <td className="orderno">
                          {" "}
                          <p>
                            <b>#205S</b>
                          </p>
                        </td>

                        <td className="">
                          <p>Name here</p>
                          <p className="smallpara">zahid@gmail.com</p>
                        </td>
                        <td className="">
                          <p>Product Title Here</p>
                          <p className="smallpara">June 12th 2022, 10:00</p>
                        </td>
                        <td style={{ color: "#219653" }}>delivered</td>
                        <td>
                          <b>$1.5</b>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );}else if(userId.userType != 2){
    return (
      <div>
        <h1>Access Denied</h1>
      </div>
    )
  }
}

export default AdminSetting;