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
  
  
},[]);
    return(
      
        <div>
       
        <div class="container">
       <div class="text-center mt-5" > <h1>Wel-Come</h1>
                <p>We’ll show you how our products, services, and success all work together</p>
           </div>
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
    

    
    
  </div>
  </div>

               
            
             </div>
         
          
        </div>
   
        </div>
    )
}
export default Login;