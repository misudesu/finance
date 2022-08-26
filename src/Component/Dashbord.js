import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";
import Axios  from 'axios';
function Dashbord(props){
   const [userid,setUserId]=useState(null);
   const [data,setData]=useState([]);
   const [dataBarcharrt,setDataBarchart]=useState([]);
   const [Hgraph,setHgraph]=useState({
    
    options: {
      chart: {
        type: "boxPlot"
      },
      xaxis: {
          categories: ["Total taransaction", "Balance", "Income","Expenses"]
      }

    },
   
})
    useEffect(()=>{
        
        setUserId(sessionStorage.getItem('userid'));
        
    Axios.post("http://localhost:3001/get/back",
    {
        userName:sessionStorage.getItem('userid')
  
    }).then((response)=>{
    
      if (response.data.Income == null && response.data.Balance== null ) {
        setData(response.data);
        console.log(response.data)
    }else{
           setData(response.data);
           console.log(response.data)
          }
       
    });
       
    Axios.post("http://localhost:3001/get/trans",
    {
        userName:sessionStorage.getItem('userid'),
       

    }).then((response)=>{
    
      if (response.data.Income == null && response.data.Balance== null ) {
        setDataBarchart(response.data);
        
    }else{
      console.log(response.data)
      setDataBarchart(response.data);
          }
       
    });
    },[])
    const [state,setState] =useState( {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
              categories: ["Book", "Course", "User","Quiz"]
          }
        },
       
        series: [],
        labels: ['Book', 'B', 'C', 'D', 'E']
      });
    return(<>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Persenal <span className="text-info   "> finance <span className="fs-5 ">{userid}</span></span></h1>
       </div>
       <div className="row">
        <div className="col-12 col-md-4 mb-2 col-lg-4 p-auto m-auto">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <div className="h4">Income</div>
                   </div>
                    <p className="text-primary fs-5 fw-bold">${data.Income} </p>
            
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 mb-2 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <div className="h4">Expenses</div>
                   </div>
                    <p className="text-danger fs-5  fw-bold">-${data.Expenses} </p>
            
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <div className="h4">Balance</div>
                   </div>
                    <p className="text-warning fs-5 fw-bold display-5">${data.Balance} </p>
                </div>
            </div>
        </div>
       </div>

      {/* <!-- chart here --> */}
      <div className="col-4 mx-5">
          <p>User Review Message</p>
        <div classNameName="donut">
    {/* <Chart options={options} series={[FeedBackNotView.length,FeedBackView.length,FeedBackView.length+FeedBackNotView.length]} type="donut" width="500" />
   */}
  </div>
  
            </div>  
      {/* <!-- line chart here --> */}
      <Chart
              options={Hgraph.options}
              series={[
                {
                  name: "Information",
                  data: [dataBarcharrt.length, data.Balance, data.Income, data.Expenses]
                },
             
              ]}
              type="area"
            width="600"
            />
      </main>
      
    </>)
}
export default Dashbord;