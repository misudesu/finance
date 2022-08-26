import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Axios  from 'axios';
function Dashbord(props){
   const [userid,setUserId]=useState(null);
   const [data,setData]=useState([]);
    useEffect(()=>{
        
        setUserId(sessionStorage.getItem('userid'));
        
    Axios.post("http://localhost:3001/get/trans",
    {
        userName:sessionStorage.getItem('userid')
  
    }).then((response)=>{
    
      if (response.data.Income == null && response.data.Balance== null ) {
        setData(response.data);
        
    }else{
           setData(response.data);
          }
       
    });
    },[])
    
    return(<>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Persenal <span class="text-info"> finance {userid}</span></h1>
       </div>
       <div class="row">
        <div class="col-12 col-md-4 mb-2 col-lg-4 p-auto m-auto">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <div class="h4">Income</div>
                   </div>
                    <p class="text-primary fs-5 fw-bold">${data.Income} </p>
            
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 mb-2 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <div class="h4">Expenses</div>
                   </div>
                    <p class="text-danger fs-5  fw-bold">-${data.Expenses} </p>
            
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="card-title">
                        <div class="h4">Balance</div>
                   </div>
                    <p class="text-warning fs-5 fw-bold display-5">${data.Balance} </p>
                </div>
            </div>
        </div>
       </div>

      {/* <!-- chart here --> */}

      {/* <!-- line chart here --> */}

      </main>
      
    </>)
}
export default Dashbord;