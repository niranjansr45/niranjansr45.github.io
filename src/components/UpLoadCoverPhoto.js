import React, { useEffect, useRef, useState } from "react";
import NavTop from "./NavTop";
import Footer from "./Footer";

function UpLoadCoverPhoto() {
  const select = useRef(null);
  return (
    <>
      <div className="parent" style={{ backgrounColor: "#128C7E" }}>
        <NavTop selected={() => select.current.click()} />
        <hr style={{ borderTop: "1px solid white" }} />

        <div
          className="empty d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <div
            className="uploadpic d-flex justify-content-center mt-5 "
            style={{
              width: "75%",
              backgroundColor: "white",
              border: "8px solid #41A398",
              borderRadius: "25px",
              height:"100vh"
            }}
          >
            <div className="headingExternalBox mt-5" style={{ width: "85%" }}>
              <div className="heading">
                <h2 className="heading" style={{fontSize:"24px",fontweight:"700"}}>Upload Cover Photo</h2>
              </div>
              <div className="attachment">
                <div className="attachmenthead" style={{ color: "#555555" }}>
                  <h5 className="mt-3">Attachments</h5>
                </div>
                <div
                  className="form mt-4 d-flex justify-content-center align-items-center"
                  style={{
                    height: "20vh",
                    border: "1px dashed #C8C8C8",
                    backgroundColor: "#F9F9F9",
                    borderRadius: "16px",
                  }}
                >
                  <form className="" method="post" action="#" id="#">
                    <div className="form-group files">
                      <label>Upload Your Image </label>
                      <input type="file" classname="form-control" multiple="" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="printLast mt-4">
                <div className="heading" >
                  <h2 style={{fontSize:"24px",fontWeight:"700"}}>Print Last</h2>
                </div>
              </div>
              <div className="buttons d-flex justify-content-between mt-4">
               
                <button
                  className=""
                  style={{
                    width: "20%",
                    height: "7vh",
                    backgroundColor: "#EFEFEF",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  60 Pages (1000/INR)
                </button>

                <button
                  className=""
                  style={{
                    width: "20%",
                    height: "7vh",
                    backgroundColor: "#EFEFEF",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  150 Pages (1500/INR)
                </button>

                <button
                  className=""
                  style={{
                    width: "20%",
                    height: "7vh",
                    backgroundColor: "#EFEFEF",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  200 Pages (1750/INR)
                </button>

                <button
                  className=""
                  style={{
                    width: "20%",
                    height: "7vh",
                    backgroundColor: "#128C7E",
                    color:"white",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  Book Entire Chat 
                  {/* Book Entire Chat ((4INR * number of pages) + 900INR) */}

                </button>


                <button
                  className=""
                  style={{
                    width: "5%",
                    height: "7vh",
                    backgroundColor: "#EFEFEF",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  +
                </button>
                <div className="para mt-3" style={{color:"red"}}><p>*If more than 200 pages are required +4 rs extra per each page</p></div>
              </div>

              <div className="printBtn mt-5">
              <button
                  className=""
                  style={{
                    width: "15%",
                    height: "8vh",
                    backgroundColor: "#128C7E",
                    color:"white",
                    borderRadius: "5px",
                    border: "none",
                   
                  }}
                >
                  <b>Print</b>
                </button>

                <button
                  className=""
                  style={{
                    width: "20%",
                    height: "8vh",
                    backgroundColor: "#FFFFFF",
                    color:"#128C7E",
                    borderRadius: "5px",
                    border: "1px solid #128C7E",
                    marginLeft:"20px"
                  }}
                >
                  <b>Download E-book</b>
                </button>
                  
              </div>

            </div>
          </div>

        </div>
        <div className="footer mt-5">
        <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default UpLoadCoverPhoto;