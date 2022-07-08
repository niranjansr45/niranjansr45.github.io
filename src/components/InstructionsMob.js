import React from "react";
import Footer from "./Footer";
import NavTopMob from "./NavTopMob";

const InstructionsMob = () => {
  return (
    <div>
      <div
        style={{
          background: `url(
            ${Image}
          )`,
          backgroundColor: "rgb(22 129 108)",
          height: window.screen.width > 700 ? "100vh" : "",
        }}
      >
        {" "}
        <NavTopMob />
      </div>

      <div id="instructions">
        <h2
          className="text-center mt-5"
          style={{
            width: "60vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          How to Export Data from WhatsApp
        </h2>
        <h6
          className="text-center mt-2"
          style={{
            width: "60vw",
            color: "grey",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          {" "}
          If you have an Android or IOS device please follow the steps given
          below to export data.
        </h6>
        <div
          className=" row"
          style={{
            width: window.screen.width > 700 ? "80vw" : "90vw",
            marginLeft: "auto",
            marginRight: "auto",
            color: "grey",
          }}
        >
          <div className="col-lg-6 col-12">
            <h3 className="text-success text-center mb-4">Android</h3>
            <ol>
              <li>In the Whatsapp app, go to the desired group</li>
              <li>
                Press the context menu (three dots) in the top right corner
              </li>
              <li>Select the "More" item.</li>
              <li>Choose "Export Chat"</li>
              <li>Select "Without Media"</li>
              <li>
                Now that your chat is extracted. you can either email it to
                yourself, or use a cloud storage in order to download it.
              </li>
              <li>
                Download the file on your computer and upload it on{" "}
                <span className="text-success " style={{ fontWeight: "bold" }}>
                  Flip Whatsapp
                </span>
              </li>
            </ol>
          </div>
          <div className="col-lg-6 col-12">
            <h3 className="text-success text-center mb-4">IOS</h3>
            <ol>
              <li>In the Whatsapp app, go to the desired group</li>
              <li>Press the group name in the top navigation bar</li>
              <li>Scroll down and select "Export Chat"</li>
              <li>Select "Without Media"</li>
              <li>
                Now that your chat is extracted. you can either email it to
                yourself, or use a cloud storage in order to download it.
              </li>
              <li>
                Download the file on your computer and upload it on{" "}
                <span className="text-success " style={{ fontWeight: "bold" }}>
                  Flip Whatsapp
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructionsMob;
