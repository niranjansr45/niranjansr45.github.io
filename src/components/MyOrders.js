import React from "react";
import NavTop from "./NavTop";
import NavTopMob from "./NavTopMob";
import "../../src/assets/css/myOrders.css";
import Footer from "./Footer";

function MyOrders() {
  return (
    <>
      <div className="parent pb-5">
        {window.screen.width > 700 ? <NavTop /> : <NavTopMob />}
        <div className="hr1">
          <hr />
        </div>
        <div className="table1 d-flex mt-5">
          <div className="headingdiv mb-3">
            <h2 className="heading"><b>My Orders</b></h2>
          </div>
          <form action="">
            <input
              className="input1"
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="Search by order number, Product name"
            />
          </form>
          <div className="table2">
            <table className="table table-borderless mt-4">
              <tr  style={{backgroundColor:"white"}}>
                <td className="orderno">
                  <b>Order No</b>
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
      <Footer></Footer>

      {/* <section className='section1'>
 <hr/>
     <div className="myOrders">
         <h2>asjfajksfhajks</h2>
     </div>

 </section>
    */}
    </>
  );
}

export default MyOrders;