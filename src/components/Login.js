import {  BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { AiFillEye } from "react-icons/ai";
import React, { useState } from "react";
import Cookies from 'js-cookie';
import axios from 'axios'

// import modules for validations



// import css
import "../../src/assets/css/signup.css";
import imgSignUp from "../../src/assets/img/girl.PNG";
import imgGoogle from "../../src/assets/img/google.PNG";
import imgMicrosoft from "../../src/assets/img/microsoft.PNG";
import imgYahoo from "../../src/assets/img/yahoo.PNG";
import imgApple from "../../src/assets/img/apple.PNG";
import imgFb from "../../src/assets/img/fb.PNG";
import imgOr from "../../src/assets/img/or.PNG";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [signUpStatus, setSignUpStatus] = useState("");

    //function to handel show and hide eye on password field starts
    function password_show_hide2() {
      var x = document.getElementById("password");
      var show_eye = document.getElementById("show_eye2");
      var hide_eye = document.getElementById("hide_eye2");
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


  //function to handel show and hide eye on password field ends

    const history = useNavigate('');

   
  
    const loginUser = async(e) =>{
      e.preventDefault();

      axios.post("http://localhost:3000/api/v1/login", {
        email, password
      })
      .then((res)=> {
        const {token} = res.data;

        Cookies.set("token", token);
        console.log(signUpStatus)
        if(res.status === 200 && Cookies.get("token")){
          setSignUpStatus("Login sucessfully");
          setTimeout(()=>{
            history("/");
          }, 1000)            
        }else if(res.status === 400){
          setSignUpStatus("Invalid Credentials")
        }else if(res.status === 500){
          setSignUpStatus("Login failed, try again");
        }
      })
  
    }


  return (
    <>
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
            
            <div className="col-md-7 signUpInfo">
              <div className="row d-flex justify-content-center  align-content-center w-100">
               
                  <div className="col-md-8 col-sm-12">
                    <form className="signUpForm form-group" onSubmit={loginUser} >
                                <p className="createAccountHead">Login to your Account</p>
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
                                            <span className="input-group-text" onClick={password_show_hide2} style={{
                                              height:"100%",
                                              margin:"0 auto",
                                              width:"40px",
                                              height:"32px"
                                            }}>
                                              <BsFillEyeSlashFill id="show_eye2" style={{
                                              position:"absolute"
                                            }} />
                                              <AiFillEye id="hide_eye2"  style={{
                                              display:"none"
                                            }}/>
                                            </span>
                                          </div>
                                        </div>
                                        <p style={{color: "red", fontFamily: "corbel",fontSize: "14px"}}>{signUpStatus}</p>
                                      </div>
                                 
                                  <button type="submit" className="submitBtn"  > LogIn</button>
                              </form>

                                  <p className="loginLink">
                                    Not registered? <a href="/signup">Create an account</a>
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
    </>
  );
 }

export default Login;