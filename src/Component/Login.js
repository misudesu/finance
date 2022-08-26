import Axios  from 'axios';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Login(){
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  let navigate = useNavigate();
 
  const [auth,setAuth]=useState('');
  const login=()=>{

    Axios.post("http://localhost:3001/login",
    {
        userName:userName,
    password:password,
    }).then((response)=>{
      console.log(response.data)
      if (response.data.username == userName && response.data.password==password) {
        sessionStorage.setItem('userid',response.data.username);
            navigate("/Dashbord/"+response.data.password, { 
              state:{
                name: userName,
             },
            });
            window.location.reload();
          }else{
           setAuth(response.data.message);
          }
       
    });
  }
useEffect(()=>{
  // Axios.get("http://localhost:3001/api/get").then((response)=>{
  //   setAuth(response.data);
  //   if (response.data.loggedIn == true) {
  //     setRole(response.data.user[0].role);
  //     navigate("/");
  //   }
  // });
  // Axios.post("http://localhost:3001/login").then((response) => {
  //   if (response.data.loggedIn == true) {
  //     navigate("/");
  //   }
  // });
  
},[]);
    return(
      
        <div>
       
        <div class="container">
         <div class="row">
   
                <div className='col-12 col-lg-5 col-md-5 p-5 m-auto'>
                {!auth?(
<>

</>
        ):(
<>
<h5 class="text-info">{auth}</h5>
</>
   )
 }
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control"   onChange={(e)=>{
                    setUserName(e.target.value);
                }}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control"   onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="button" class="btn btn-primary btn-block mb-4" onClick={login}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">
    <p>Not a member? <Link to="/SignUp">Register</Link></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
  </div>

                {/* <div class="col-12 col-lg-4 col-md-4 bg-light m-auto ">
                    <input type="text" class="form-control mb-2" placeholder="User name"/>
                        <input type="password" class="mb-2 form-control" name="password" id="" placeholder="pssword"/>
                        <Link class="btn btn-primary   " to="dashbord">Login</Link>
                        <Link to="/" class=""> <p>Forgate Password?</p></Link>
                        <Link to="SignUp" class="btn btn-sm btn-outline-primary d-flex">SignUp</Link>
          
 </div> */}
            
             </div>
         
          
        </div>
   
        </div>
    )
}
export default Login;