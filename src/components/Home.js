import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import NavTop from "./NavTop";
import Image from "../assets/dot-map.png";
import NavTopMob from "./NavTopMob";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Details from "./Details";

const Home = () => {
  const navigate = useNavigate();
  const select = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [stats, setStats] = useState({});

  // zipper
  const [fileData, setFileData] = useState([]);


  useEffect(() => {
    fetch("https://analyze.flipwhatsapp.com/api/v1/stats")
      .then((res) => res.json())
      .then((data) =>
        setStats({
          totalUser: data.Total_Users,
          totalAnalysed: data.total_analyzed,
          todayAnalysed: data.total_analyzed_per_day,
        })
      )
      .catch((err) => console.log(err));

  }, []);

  //handlers
  const fileChangeHandler = (e)=>{
    setFileData(e.target.files[0])
  }
  
  const checkIt = () => {
    alert(fileData.name)
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault();

  const data = new FormData()
  data.append('image', fileData)

  axios.post("http://localhost:3000/singleFile", {
    data
  })
  .then((res)=>{
    if(res.status === 200){
      console.log("file sent successfully")
    }else {
      console.log("jaang ayaa")
    }
    
  console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  }
  )
    // fetch("http://localhost:3000/single", {
    //   method:"POST",
    //   headers: {'Content-type': 'multipart/form-data; boundary=XXX' },
    //   body: data,
    // }).then((result)=>{
    //   if(result.status === 200){
    //   console.log("file sent successfully")
    // }else{
    //   console.log("jaang ayaa")
    // }
    // }).catch((err)=>{
    //   console.log(err.message)
    // })
  }

  return (
    <>
      {/* desktop */}
      <div className="d-lg-block d-none">
        <div
          style={{
            background: `url(
            ${Image}
          )`,
            backgroundColor: "rgb(22 129 108)",
            height: "100vh",
            width: "100vw",
          }}
        >
          <NavTop selected={() => select.current.click()} />
          <hr style={{ borderTop: "1px solid white" }} />
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div>
              <h1 className="text-white text-center mt-5">
                Whatsapp Chat Analyzer
              </h1>
              <h6
                className=" text-center"
                style={{
                  width: "500px",
                  color: "lightgrey",
                  marginBottom: "40px",
                }}
              >
                Analyze your WhatsApp chats easy way without losing your privacy
              </h6>
              <form onSubmit={onSubmitHandler} 
                style={{
                  width: "400px",
                  height: "50px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "20px",
                  boxShadow: "0px 0px 12px lightgrey",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                }}
              >
                <input type="file" name="image" onChange={fileChangeHandler}  style={{ fontSize: "10px", color: "grey" }}/>
                  {selectedFile}
                {/* analyse btn llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll */}
                <button type="submit"
                  className="btn btn-success"
                  style={{ fontSize: "12px" }}
                >
                  Analyze
                </button>
              </form>
              <div className="d-flex justify-content-between align-content-center text-center text-white mt-5">
                <div
                  style={{
                    borderRight: "1px solid white",
                    paddingRight: "60px",
                  }}
                >
                  <a style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {stats.totalUser}
                  </a>
                  <br />
                  <a style={{ fontSize: "12px" }}>Total Analyzed</a>
                </div>
                <div
                  style={{
                    borderRight: "1px solid white",
                    paddingRight: "60px",
                  }}
                >
                  <a style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {stats.totalAnalysed}
                  </a>
                  <br />
                  <a style={{ fontSize: "12px" }}>Total Users</a>
                </div>
                <div>
                  <a style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {stats.todayAnalysed}
                  </a>
                  <br />
                  <a style={{ fontSize: "12px" }}>Today Analyzed</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="instructions">
          <h2 className="text-center mt-5">How to Export Data from WhatsApp</h2>
          <h6
            className="text-center mt-2 mb-5"
            style={{
              width: "400px",
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
            <div
              className="col-lg-6 col-12"
              style={{
                borderRight: "1px solid lightgrey",
              }}
            >
              <h3 className="text-success text-center mb-4">Android</h3>
              <ol>
                <li className="mb-4">
                Open WhatsApp and tap on the chat you would like to export
                Tap on the three dots at the top right corner.
                </li>
                <li className="mb-4">In the menu tap on More.</li>
                <li className="mb-4">Tap on Export chat.</li>
                <li className="mb-4">
                Choose Without Media or Include Media i you want to include your images and othe files in the export.
                </li>
                <li>Now in the sharing save it locally or in Google Drive or you can mail it to yourself.</li>
                <li>
                If media file were included, zip it into a single file Upload exported .TXT or .zip file and click {" "}
                  <span
                    className="text-success "
                    style={{ fontWeight: "bold" }}
                  >
                    analyze now
                  </span>
                </li>
              </ol>
            </div>
            <div className="col-lg-6 col-12">
              <h3 className="text-success text-center mb-4">IOS</h3>
              <ol>
                <li className="mb-4 ">
                Open WhatsApp and the open the chat you would like to export
                On the top tap on the name of the chat.
                </li>
                <li className="mb-4">
                In chat info, scroll all the way to the bottom.
                </li>
                <li className="mb-4">Tap on Export Chat.</li>
                <li className="mb-4">Choose Without Media or Include Media i you want to include your images and othe files in the export.</li>
                <li className="mb-4">
                Tap on Save to Files to save it on your iPhone.
                </li>
                <li>
                Finally select On my iPhone and save to save it locally. At last upload exported .zip file and click {" "}
                  <span
                    className="text-success "
                    style={{ fontWeight: "bold" }}
                  >
                   analyze now
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(241 240 240)",
            paddingTop: "50px",
            paddingBottom: "50px",
            marginTop: "70px",
          }}
        >
          <div
            id="about-us"
            className="d-flex justify-content-evenly align-items-center container "
          >
            <div>
              <h6>ABOUT US</h6>
              <h2 className="mb-3">
                <span className="text-success">Analyse</span> your{" "}
                <span className="text-success">WhatsApp</span> <br /> Chat in
                few
                <span className="text-success"> Seconds</span>
              </h2>
              <h6
                style={{ color: "grey", width: "400px", textAlign: "justify" }}
              >
                Welcome to FlipWhatsapp. In the digital era, a lot of personal
                data will, sooner or later, be forgotten in the data graveyard.
                With this platform, you can transfer your words from WhatsApp to
                an E-book and safe them for eternity. Because the small memories
                and stories of life should be made eternal. If you have
                additional questions or require more information about our
                website, do not hesitate to Contact through email
                support@flipwhatsapp.com We hope you enjoy Our services as much
                as we enjoy offering them to you Sincerely, FlipWhatsapp
              </h6>
              <button
                className="btn btn-success mt-3"
                onClick={() => select.current.click()}
              >
                Analyse Now
              </button>
              <input
                type="file"
                style={{ display: "none" }}
                ref={select}
                accept=".txt, .zip"
                onChange={(e) => {
                  let newFile = new FileReader();
                  newFile.readAsText(e.target.files[0]);
                  newFile.onload = function () {
                    // setSelectedFile(newFile.result);
                    setSelectedFile(e.target.files[0].name);
                    let formData = new FormData();
                    formData.append("file", e.target.files[0]);
                    // fetch("https://analyze.flipwhatsapp.com/api/v1/postTxt", {
                    //   method: "POST",
                    //   headers: { "Content-Type": "multipart/form-data" },
                    //   body: JSON.stringify({ formData }),
                    // })
                    //   .then((res) => res.json())
                    //   .then((data) => console.log(data))
                    //   .catch((err) => console.log(err));
                    if (e.target.files[0].name.includes(".txt")) {
                      axios
                        .post(
                          "https://analyze.flipwhatsapp.com/api/v1/postTxt",
                          formData
                        )
                        .then((res) => {
                          navigate("/analysed", { state: res.data });
                        })
                        .catch((err) => console.log(err));
                    } else {
                      axios
                        .post(
                          "https://analyze.flipwhatsapp.com/api/v1/Zip",
                          formData
                        )
                        .then((res) => {
                          navigate("/analysed", { state: res.data });
                        })
                        .catch((err) => console.log(err));
                    }
                  };
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: "rgb(56 141 125)",
                height: "400px",
                width: "400px",
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <h1> ▶️</h1>
            </div>
          </div>
        </div>
        <div id="faqs" className=" px-lg-5 mt-5 pt-5 mb-5">
          <div className="text-center">
            <h6 className="text-success">FAQS</h6>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div
            className=" d-grid mt-5"
            style={{
              gridTemplateColumns: "500px 500px",
              width: "1100px",
              gridGap: "80px",
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
              What does the exported text file contains?
              </h6>
              <p style={{ textAlign: "justify" }}>
              The text file you're exporting from WhatsApp contain a list of messages from your chat. The format of the file is *.txt and each line presents a message in the chat.
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
              What does the exported text file contains?
              </h6>
              <p style={{ textAlign: "justify" }}>
              The text file you're exporting from WhatsApp contain a list of messages from your chat. The format of the file is *.txt and each line presents a message in the chat.
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
              What does the exported text file contains?
              </h6>
              <p style={{ textAlign: "justify" }}>
              The text file you're exporting from WhatsApp contain a list of messages from your chat. The format of the file is *.txt and each line presents a message in the chat.
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
              What does the exported text file contains?
              </h6>
              <p style={{ textAlign: "justify" }}>
              The text file you're exporting from WhatsApp contain a list of messages from your chat. The format of the file is *.txt and each line presents a message in the chat.
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
              What does the exported text file contains?
              </h6>
              <p style={{ textAlign: "justify" }}>
              The text file you're exporting from WhatsApp contain a list of messages from your chat. The format of the file is *.txt and each line presents a message in the chat.
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
              What does the exported text file contains?
              </h6>
              <p style={{ textAlign: "justify" }}>
              The text file you're exporting from WhatsApp contain a list of messages from your chat. The format of the file is *.txt and each line presents a message in the chat.
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
              We DON'T store, read or save your chats if you placed an order for ebook. However if you ordered the physical copy then the chat will be stored for the printing purpose and will be permanently deleted after 7 days of successful delivery.
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
              When exporting with media, you can send up to 10,000 latest messages. Without media, you can send up to 40,000 messages.
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
              We have no such constraints regarding messages. However, WhatsApp itself has added some constraints and limits chat exporting to the last 40,000 messages.
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
              Some conversation might take longer than usual to get analyzed due to following reasons:
                <br />
                1) 	The particular conversation contains too many messages.
                <br />
                2)	Your network connection is slow
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
              What is the size & quality ofthe book?
              </h6>
              <p style={{ textAlign: "justify" }}>
              We will print in premium quality. We will print on 130 gsm Matt paper for Inner pages and binding will be perfect binding of 300 gsm Matt paper for less than 60 pages and hard binding for more than 60 pages.
              </p>
            </div>

          </div>
        </div>

        <Footer selected={() => select.current.click()} />
      </div>



      {/* mobile////////////////////////////////////////////////////////////////////////// */}






      <div className="d-lg-none">
        <div
          style={{ backgroundColor: "rgb(56 141 125)", paddingBottom: "20px" }}
        >
          <NavTopMob />
          <hr style={{ borderTop: "1px solid white" }} />
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div>
              <h1 className="text-white text-center mt-3">
                Whatsapp Chat Analyzer
              </h1>
              <h6
                className=" text-center"
                style={{
                  width: "90vw",
                  color: "lightgrey",
                  marginBottom: "40px",
                }}
              >
                Analyze your WhatsApp chats easy way without losing your privacy
              </h6>
              <div
                style={{
                  width: "90vw",
                  height: "50px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "20px",
                  boxShadow: "0px 0px 12px lightgrey",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "15px",
                }}
              >
                <a style={{ fontSize: "10px", color: "grey" }}>
                  {/* {selectedFile == "" ?
                    "select a txt or zip file..."
                    : */}
                    {selectedFile}
                  {/* } */}
                </a>
                <div>
                {/* <button
                  className="btn btn-success"
                  style={{ fontSize: "12px" }}
                  onClick={() => {select.current.click();
                  alert("xam manish");}}
                >
                  Analysfdfsze
                </button> */}
                {/* <button
                  className="btn btn-success"
                  style={{ fontSize: "12px" }}
                  onClick={() => select.current.click()}
                >
                  Analdfsdfyze
                </button> */}
                </div>

              </div>
              <div className="d-flex justify-content-between align-content-center text-center text-white mt-5">
                <div
                  style={{
                    borderRight: "1px solid white",
                    paddingRight: "30px",
                  }}
                >
                  <a style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {stats.totalAnalysed}
                  </a>
                  <br />
                  <a style={{ fontSize: "12px" }}>Total Analyzed</a>
                </div>
                <div
                  style={{
                    borderRight: "1px solid white",
                    paddingRight: "30px",
                  }}
                >
                  <a style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {stats.totalUser}
                  </a>
                  <br />
                  <a style={{ fontSize: "12px" }}>Total Users</a>
                </div>
                <div>
                  <a style={{ fontSize: "30px", fontWeight: "bold" }}>
                    {stats.todayAnalysed}
                  </a>
                  <br />
                  <a style={{ fontSize: "12px" }}>Today Analyzed</a>
                </div>
              </div>
            </div>
          </div>
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
                <li>Open WhatsApp and tap on the chat you would like to export
                        Tap on the three dots at the top right corner.
                   </li>
                <li>
                In the menu tap on More.
                </li>
                <li>Tap on Export chat.</li>
                <li>Choose Without Media or Include Media i you want to include your images and othe files in the export.</li>
                <li>Now in the sharing save it locally or in Google Drive or you can mail it to yourself.</li>
                <li>
                If media file were included, zip it into a single file
                      Upload exported .TXT or .zip file and click {" "}
                  <span
                    className="text-success "
                    style={{ fontWeight: "bold" }}
                  >
                    analyze now
                  </span>
                </li>
              </ol>
            </div>
            <div className="col-lg-6 col-12">
              <h3 className="text-success text-center mb-4">IOS</h3>
              <ol>
                <li>Open WhatsApp and the open the chat you would like to export
                On the top tap on the name of the chat.
                </li>
                <li>In chat info, scroll all the way to the bottom.</li>
                <li>Tap on Export Chat.</li>
                <li>Choose Without Media or Include Media i you want to include your images and othe files in the export.</li>
                <li>
                Tap on Save to Files to save it on your iPhone.
                </li>
                <li>
                Finally select On my iPhone and save to save it locally. 
                </li>
                <li>
                At last upload exported .zip file and click {" "}
                  <span
                    className="text-success "
                    style={{ fontWeight: "bold" }}
                  >
                   analyze now
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(241 240 240)",
            paddingTop: "50px",
            paddingBottom: "50px",
            marginTop: "70px",
          }}
        >
          <div id="about-us" className="text-center">
            <div>
              <h6>ABOUT US</h6>
              <h2 className="mb-3">
                <span className="text-success">Analyse</span> your{" "}
                <span className="text-success">WhatsApp</span> <br /> Chat in
                few
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
                Welcome to FlipWhatsapp. In the digital era, a lot of personal
                data will, sooner or later, be forgotten in the data graveyard.
                With this platform, you can transfer your words from WhatsApp to
                an E-book and safe them for eternity. Because the small memories
                and stories of life should be made eternal. If you have
                additional questions or require more information about our
                website, do not hesitate to Contact through email
                support@flipwhatsapp.com We hope you enjoy Our services as much
                as we enjoy offering them to you Sincerely, FlipWhatsapp
              </h6>
              <button
                className="btn btn-success mt-3 mb-3"
                onClick={() => select.current.click()}
              >
                Analyse Now
              </button>
            </div>
            <div
              style={{
                backgroundColor: "rgb(56 141 125)",
                height: "250px",
                width: "330px",
                borderRadius: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <h1> ▶️</h1>
            </div>
          </div>
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
               What does the exported text file contains?
              </h6>
              <p style={{ textAlign: "justify" }}>
              The text file you're exporting from WhatsApp contain a list of messages from your chat. The format of the file is *.txt and each line presents a message in the chat.
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
              We DON'T store, read or save your chats if you placed an order for ebook. However if you ordered the physical copy then the chat will be stored for the printing purpose and will be permanently deleted after 7 days of successful delivery
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
              When exporting with media, you can send up to 10,000 latest messages. Without media, you can send up to 40,000 messages.
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
              We have no such constraints regarding messages. However, WhatsApp itself has added some constraints and limits chat exporting to the last 40,000 messages.
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
              Some conversation might take longer than usual to get analyzed due to following reasons:
               <br />
               1)	The particular conversation contains too many messages.
                <br />
                2)	Your network connection is slow
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
              What is the size & quality ofthe book?
              </h6>
              <p style={{ textAlign: "justify" }}>
              We will print in premium quality. We will print on 130 gsm Matt paper for Inner pages and binding will be perfect binding of 300 gsm Matt paper for less than 60 pages and hard binding for more than 60 pages.
              </p>
            </div>
          </div>
        </div>
        <Footer selected={() => select.current.click()} />
      </div>
    </>
  );
};

export default Home;
