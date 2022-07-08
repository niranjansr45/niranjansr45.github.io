import {  BsFillEyeSlashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import React, {Fragment , useState } from "react";
import {useRef, useEffect} from 'react';
import "../../src/assets/css/signup.css";
import imgSignUp from "../../src/assets/img/girl.PNG";
import imgGoogle from "../../src/assets/img/google.PNG";
import imgMicrosoft from "../../src/assets/img/microsoft.PNG";
import imgYahoo from "../../src/assets/img/yahoo.PNG";
import imgApple from "../../src/assets/img/apple.PNG";
import imgFb from "../../src/assets/img/fb.PNG";
import imgOr from "../../src/assets/img/or.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// import {
//   faLocationDot,
//   faEnvelope,
//   faPhone,
  
// } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")

  const [signUpStatus, setSignUpStatus] = useState("")

  // on click functions on passwoord button starts
     function password_show_hide() {
        var x = document.getElementById("password");
        var show_eye = document.getElementById("show_eye");
        var hide_eye = document.getElementById("hide_eye");
        hide_eye.classList.remove("d-none");
        if (x.type === "password") {
          x.type = "text";
          show_eye.style.display = "none";
          hide_eye.style.display = "block";
        } else {
          x.type = "password";
          show_eye.style.display = "block";
          hide_eye.style.display = "none";
        }
      }

      function cpassword_show_hide1() {
        var x = document.getElementById("cpassword");
        var show_eye = document.getElementById("show_eye1");
        var hide_eye = document.getElementById("hide_eye1");
        hide_eye.classList.remove("d-none");
        if (x.type === "password") {
          x.type = "text";
          show_eye.style.display = "none";
          hide_eye.style.display = "block";
        } else {
          x.type = "password";
          show_eye.style.display = "block";
          hide_eye.style.display = "none";
        }
      }
// on click functions on passwoord button starts

// functions to submit form data
      const onSubmitFrom = async(e) =>{
        e.preventDefault();
          try{
          const body = {name, email, password, cpassword}
          const response =await fetch("http://localhost:3000/api/v1/signup", {
              method: "POST",
              headers:{"Content-Type": "application/json"},
              body:JSON.stringify(body)
          });
          if(response.status === 422){
            setSignUpStatus("Please fill up all the fields")
          }
         else if(response.status === 400){
            setSignUpStatus("Email already register try another")
          }
          else if(response.status === 421){
            setSignUpStatus("Password is not matching")
          }else if(response.status === 200){
            setSignUpStatus("Registered sucessfully");
            setTimeout(()=>{
              window.location ="/login";
            }, 1000)            
          }else if(response.status === 500){
            setSignUpStatus("Registered failed, try again");
          }
          // console.log(response)
          }catch(err){
          console.error(err.message)
          }
      }
  return (


    <Fragment>
    <div className="container-fluid bg-warning">
      <div className="row h-md-100 parentCont ">
            <div className="col-md-4 h-md-100 imgCont"
            >
                <img
                    className="imgGirl"
                    id=""
                    src={imgSignUp}
                    alt="not found"
                  />
            </div>
            

            <div className="col-md-7 signUpInfo"
            >
              <div className="row d-flex justify-content-center  align-content-center w-100">
               
                  <div className="col-md-8 col-sm-12">
                    <form  className="signUpForm form-group" onSubmit={onSubmitFrom} >
                                <p className="createAccountHead">Create new Account</p>
                                  <label htmlFor="fullName" className="">
                                    Full Name
                                  </label>
                                  <div className="col-12">
                                        <div className="input-group mb-2">
                                         <input
                                            type="text"
                                            className="form-control inputTypes"
                                            id="fullName"
                                            placeholder="Enter Name"
                                            required="true"
                                            value = {name} 
                                            onChange = { e => setName(e.target.value) }
                                          />   
                                          
                                        </div>
                                      </div>
                                 

                                  <label htmlFor="email" className="">
                                    Email
                                  </label>
                                  <div className="col-12">
                                        <div className="input-group mb-2">
                                           <input
                                                type="email"
                                                className="form-control inputTypes"
                                                id="email"
                                                placeholder="Enter email"
                                                required="true"
                                                value = {email} 
                                                onChange = { e => setEmail(e.target.value) }
                                              />
                                          
                                        </div>
                                      </div>
                            



                                <label htmlFor="password" className=""> Password </label>
                                    <div className="col-12">
                                        <div className="input-group mb-2" style={{
                                              display:"flex"
                                            }}>
                                          
                                          <input name="password" 
                                           type="password" 
                                           className="input form-control inputTypes"
                                           id="password" 
                                           placeholder="password" 
                                           required="true" 
                                           aria-label="password" 
                                           aria-describedby="basic-addon1" 
                                           value={password}
                                           onChange={ e => setPassword(e.target.value)} />


                                          <div className="input-group-append">
                                            <span className="input-group-text" onClick={password_show_hide} style={{
                                              height:"100%",
                                              margin:"0 auto",
                                              width:"40px",
                                              height:"32px"
                                            }}>
                                              <BsFillEyeSlashFill id="show_eye" style={{
                                              position:"absolute"
                                            }} />
                                              <AiFillEye id="hide_eye"  style={{
                                              display:"none"
                                            }}/>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                  

                                  <label htmlFor="cpassword" className=""> Confirm Password  </label>
                                    <div className="col-12">
                                        <div className="input-group mb-2" style={{
                                              display:"flex"
                                            }}>
                                          
                                          <input name="password" 
                                           type="password" 
                                           className="form-control inputTypes"
                                           id="cpassword" 
                                           placeholder="Enter Password" 
                                           required="true" 
                                           aria-label="password" 
                                           aria-describedby="basic-addon1" 
                                           value = {cpassword} 
                                           onChange = { e => setCpassword(e.target.value) } />


                                          <div className="input-group-append">
                                            <span className="input-group-text" onClick={cpassword_show_hide1} style={{
                                              height:"100%",
                                              margin:"0 auto",
                                              width:"40px",
                                              height:"32px"
                                            }}>
                                              <BsFillEyeSlashFill id="show_eye1" style={{
                                              position:"absolute"
                                            }} />
                                              <AiFillEye id="hide_eye1"  style={{
                                              display:"none"
                                            }}/>
                                            </span>
                                          </div>
                                        </div>
                                        <p style={{color: "red", fontFamily: "corbel",fontSize: "14px"}}>{signUpStatus}</p>
                                      </div>
                                 

                                  {/* <label htmlFor="cpassword" className="">
                                    Confirm Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="cpassword"
                                    placeholder="Enter Password"
                                    value = {cpassword} 
                                    onChange = { e => setCpassword(e.target.value) }
                                  /> */}






                                  <button type="submit" className="submitBtn"> Sign Up</button>
                                
                                
                              </form>
                                  <p className="loginLink">
                                    Already have an account? <a href="/login">Login</a>
                                  </p>
                                  <div className="orDiv">
                                   <img src={imgOr} style={{
                                     width:"100%"

                                   }}/>
                                  </div>

                                  <p className="signUpWith">
                                    Sign up using
                                  </p>
                                  
                                  <div className="signUpLinks"
                                  style={{
                                    height:"110px"
                                  }}>
                                    <div className="sepDivLinks"
                                      style={{
                                          border: "2px solid whitesmoke",
                                            }}>
                                      <a href="#">
                                      <img
                                          className="imgGirl"
                                          id=""
                                          src={imgGoogle}
                                          alt="not found"

                                        />
                                      </a>
                                    </div>

                                    <div className="sepDivLinks"
                                      style={{
                                            background:"#303030"
                                          }}>
                                      <a href="#">
                                        <img 
                                        src={imgMicrosoft}/>
                                      </a>
                                    </div>
                                    
                                    <div className="sepDivLinks"
                                      style={{
                                          background:"#9B11B1"
                                        }}>
                                      <a href="#">

                                        <img 
                                        src={imgYahoo}/>
                                      </a>
                                    </div>

                                  <div className="sepDivLinks"
                                      style={{
                                        background:"#000000"
                                      }}>
                                      <a href="#">
                                        <img 
                                        src={imgApple}/>
                                      </a>
                                    </div>

                                    <div className="sepDivLinks"
                                      style={{
                                        background:"#2F80ED"
                                      }}>
                                      <a href="#">
                                        <img 
                                        src={imgFb}/>
                                      </a>
                                    </div>

                                  </div>
                               </div>
                            </div>
                          </div>
                          </div>
                        </div>
    </Fragment>
  )
 };

export default SignUp;
