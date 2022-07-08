import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ChatAnalysed from "./components/ChatAnalysed";
import Home from "./components/Home";
import SuccessfulPayment from "./components/SuccessfulPayment";
import PaymentForm from "./components/PaymentForm";
import InstructionsMob from "./components/InstructionsMob";
import FaqsMob from "./components/FaqsMob";
import PopUp from "./components/PopUp"
import AboutUsMob from "./components/AboutUsMob";
import MyOrders from "./components/MyOrders";
import Details from "./components/Details";
import AdminSetting from "./components/AdminSetting";
import DownloadRep from "./components/DownloadRep";
import UpLoadCoverPhoto from "./components/UpLoadCoverPhoto";
// import AnalysedContainer from "./components/AnalysedContainer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/paymetform" element={<PaymentForm />} />
        <Route path="/analysed" element={<ChatAnalysed />} />
        <Route path="/success" element={<SuccessfulPayment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<PaymentForm />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/details" element={<Details />} />
        <Route path="/adminsetting" element={<AdminSetting />} />
        <Route path="/popup" element={<PopUp />} />

        <Route path="/uploadcoverphoto" element={<UpLoadCoverPhoto />} />
        <Route path="/downloadrep" element={<DownloadRep />} />
        {/* <Route path="/analysedcontainer" element={<AnalysedContainer />} /> */}


        {window.screen.width < 700 && (
          <>
            <Route path="/instructions" element={<InstructionsMob />} />
            <Route path="/faqs" element={<FaqsMob />} />
            <Route path="/about-us" element={<AboutUsMob />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
