import React from "react";
import Footer from "./Footer";
import NavTopMob from "./NavTopMob";

const FaqsMob = () => {
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
      <div id="faqs" className=" px-lg-5 mt-5 pt-5 mb-4">
        <div className="text-center">
          <h6 className="text-success">FAQS</h6>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div
          className=" d-grid mt-5"
          style={{
            gridTemplateColumns: "80vw",
            gridGap: "80px",
            width: "80vw",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              boxShadow: "0 0 10px #aaa",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h6 style={{ fontWeight: "bold" }}>
              What does the exported text file contain?
            </h6>
            <p style={{ textAlign: "justify" }}>
              The text file you're exporting from WhatsApp contain a list of
              messages from your chat. The format of the file is *.txt and each
              line presents a message in the chat.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0 0 10px #aaa",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h6 style={{ fontWeight: "bold" }}>
              Does view once messages also included in the text file?
            </h6>
            <p style={{ textAlign: "justify" }}>
              No, all view once messages will get deleted once it is viewed.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0 0 10px #aaa",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h6 style={{ fontWeight: "bold" }}>
              Will my chat data is stored in the server?
            </h6>
            <p style={{ textAlign: "justify" }}>
              We DON'T store, read or save your chats. All code runs locally in
              your browser. Your chat will be analyzed only for the purpose of
              generating report.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0 0 10px #aaa",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h6 style={{ fontWeight: "bold" }}>
              Are there any limitations to the chat I can export?
            </h6>
            <p style={{ textAlign: "justify" }}>
              When exporting with media, you can send up to 10,000 latest
              messages. Without media, you can send up to 40,000 messages.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0 0 10px #aaa",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h6 style={{ fontWeight: "bold" }}>
              Why can't I analyze more than 40,000 Messages from single chat?
            </h6>
            <p style={{ textAlign: "justify" }}>
              We have no such constraints regarding messages. However, WhatsApp
              itself has added some constraints and limits chat exporting to the
              last 40,000 messages.
            </p>
          </div>
          <div
            style={{
              boxShadow: "0 0 10px #aaa",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h6 style={{ fontWeight: "bold" }}>
              Why some conversation takes too much time to get analyzed?
            </h6>
            <p style={{ textAlign: "justify" }}>
              Some conversation might take longer than usual to get analyzed due
              to following reasons: <br />
              1) The particular conversation contains too many messages.
              <br />
              2) Your network connection is slow
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FaqsMob;
