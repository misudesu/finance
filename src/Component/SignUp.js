import { useState } from 'react';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import Axios from "axios";

function SignUp(){
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
   const submit=()=>{
  
Axios.post("http://localhost:3001/app",
{
    userName:userName,
password:password,
}).then(()=>{
    alert("successfully inserted");
   
});

   }
   return(<>
     <section id="signUp" class="section-padding p-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-4 col-md-4 m-auto p-auto ">
             
                <input type="text" name="userName" class="form-control mb-2" placeholder="Email" onChange={(e)=>{
                    setUserName(e.target.value);
                }}/>
                <input type="password" class="mb-2 form-control" name="password" placeholder="password" id="one"
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
               <button    class="btn btn-primary " onClick={submit}>SignUp</button>        
            </div>
        </div>
    </div>
  </section> 
    </>)
}
export default SignUp;