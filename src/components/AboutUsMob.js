import React from "react";
import Footer from "./Footer";
import NavTopMob from "./NavTopMob";

const AboutUsMob = () => {
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
      <div id="about-us" className="text-center mt-4 mb-4">
        <div>
          <h6>ABOUT US</h6>
          <h2 className="mb-3">
            <span className="text-success">Analyse</span> your{" "}
            <span className="text-success">WhatsApp</span> <br /> Chat in few
            <span className="text-success"> Seconds</span>
          </h2>
          <h6
            style={{
              color: "grey",
              width: "90vw",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Welcome to FlipWhatsapp. In the digital era, a lot of personal data
            will, sooner or later, be forgotten in the data graveyard. With this
            platform, you can transfer your words from WhatsApp to an E-book and
            safe them for eternity. Because the small memories and stories of
            life should be made eternal. If you have additional questions or
            require more information about our website, do not hesitate to
            Contact through email support@flipwhatsapp.com We hope you enjoy Our
            services as much as we enjoy offering them to you Sincerely,
            FlipWhatsapp
          </h6>
        </div>
        <div
          style={{
            backgroundColor: "rgb(56 141 125)",
            height: "250px",
            width: "330px",
            borderRadius: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "50px",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <h1> ▶️</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsMob;
