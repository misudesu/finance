import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
export default function Logout() {
    let navigate = useNavigate();
    sessionStorage.removeItem('userid');
    navigate("/login");
  return (
    <div>
     {navigate("/login")} 
    </div>
  )
}
