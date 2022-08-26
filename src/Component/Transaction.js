import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Axios  from 'axios';
function Transaction(){
  const [userid,setUserId]=useState(null);
   const [data,setData]=useState([]);
   const [back,setBack]=useState([]);
   const [date,setDate]=useState('');
   const [description,setDescription]=useState('');
   const [category,setCategory]=useState('');
   const [income,setIncome]=useState(0);
   const [expenses,setExpenses]=useState(0);
   const [balance,setBalance]=useState(0);
   const [transaction,setTransaction]=useState('');
   
    useEffect(()=>{
        
        setUserId(sessionStorage.getItem('userid'));
        
    Axios.post("http://localhost:3001/get/trans",
    {
        userName:sessionStorage.getItem('userid'),
       

    }).then((response)=>{
    
      if (response.data.Income == null && response.data.Balance== null ) {
        setData(response.data);
        
    }else{
      console.log(response.data)
           setData(response.data);
          }
       
    });
      
    Axios.post("http://localhost:3001/get/back",
    {
        userName:sessionStorage.getItem('userid'),
       

    }).then((response)=>{  
      if (response.data.Income == null && response.data.Balance== null ) {
        console.log(response.data)
        setBack({userName:sessionStorage.getItem('userid'),Balance:"0",Income:"0",Expenses:"0"});
        
    }else{
      console.log(response.data)
           setBack(response.data);
          }
       
    });
    },[])
    const Create=()=>{
      if(income==true){
      Axios.post("http://localhost:3001/post/transaction",
    {
        userName:sessionStorage.getItem('userid'),
        Date:date,
        Description:description,
        Category:category,
        Income:parseInt(back.Income) + parseInt(transaction),
        Expenses:back.Expenses,
        Balance:parseInt(back.Balance)+parseInt(transaction) ,
        transaction:transaction
    }).then((response)=>{
     
      if (response.data.Income == null && response.data.Balance== null ) {
        setData(response.data);
        alert("successfully inserted");
    }else{
      console.log(response.data)
           setData(response.data);
          }
       
    }); 
  }else if(expenses==true){

    Axios.post("http://localhost:3001/post/transaction",
    {
        userName:sessionStorage.getItem('userid'),
        Date:date,
        Description:description,
        Category:category,
        Income:back.Income,
        Expenses:parseInt(back.Expenses) + parseInt(transaction),
        Balance:back.Balance-transaction,
        transaction:transaction
  
    }).then((response)=>{
      
      if (response.data.Income == null && response.data.Balance== null ) {
        // setData(response.data);
        alert("successfully inserted");
    }else{
      console.log(response.data)
          //  setData(response.data);
          }
       
    }); 
  }
    }
    return(<>
 <div className="row col-md-9 ms-sm-auto col-lg-10 px-md-4">
         <div classNameName="col-12"> 
         <nav>
               <div className="nav nav-tabs mb-3 my-4" id="nav-tab" role="tablist">                
                 <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Transaction</button>
                 <button className="nav-link " id="nav-Transaction-tab" data-bs-toggle="tab" data-bs-target="#nav-Transaction" type="button" role="tab" aria-controls="nav-Transaction" aria-selected="false">Add Transaction</button>
                 <button className="nav-link " id="nav-category-tab" data-bs-toggle="tab" data-bs-target="#nav-category" type="button" role="tab" aria-controls="nav-category" aria-selected="false">Category</button>                               
               </div>
             </nav>
         
             <div className="tab-content" id="nav-tabContent">
               <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              
                    <table className="table">
                   <thead>
                   <th>date</th>
         <th>Category </th>
         <th>Income</th>
         <th>Balance</th>
         <th>Expenses</th>
         <th>Action</th>
         <th></th>
                   </thead>
                   <tbody>
               {data.map((val)=>{
return(
              
                       <tr key={val.id} >
                
         <td classNameName="text-black">{val.Date}</td>
         <td>{val.Category}</td>
         <td>${val.Income}</td>
         <td>${val.Balance}</td>
         <td>${val.Expenses}</td>
         <td><button  className="btn btn-sm btn-danger">delete</button>       
               <button  className="btn btn-sm btn-primary">Edit</button>  
             </td>
         </tr>
)
          })}
            </tbody>
               </table>
           <div className="bd-example mx-5 ">
                 <nav aria-label="Standard pagination example text-align-center justify-content-between align-items-center">
                   <ul className="pagination">
                     <li className="page-item">
                       <a className="page-link" href="#" aria-label="Previous">
                         <span aria-hidden="true">«</span>
                       </a>
                     </li>
                     <li className="page-item"><a className="page-link" href="#">1</a></li>
                     <li className="page-item"><a className="page-link" href="#">2</a></li>
                     <li className="page-item"><a className="page-link" href="#">3</a></li>
                     <li className="page-item">
                       <a className="page-link" href="#" aria-label="Next">
                         <span aria-hidden="true">»</span>
                       </a>
                     </li>
                   </ul>
                 </nav>
                 </div>
               </div>
               <div className="tab-pane fade " id="nav-Transaction" role="tabpanel" aria-labelledby="nav-profile-tab">
                 <div className="row  p-5">
                     <div className="col-12 col-lg-2 col-md-2"></div>
                     <div className="form-check form-switch">
                         <input className="form-check-input" type="checkbox" name="Income" id="flexSwitchCheckDefault"
                        onChange={(e)=>{
                          setIncome(e.target.checked);
                      }} />
                         <label className="form-check-label" for="flexSwitchCheckDefault">Income</label>
                       </div>
                       <div className="form-check form-switch">
                         <input className="form-check-input" type="checkbox" name="Expenses" id="flexSwitchCheckDefault"
                         onChange={(e)=>{
                          setExpenses(e.target.checked);
                      }}/>
                         <label className="form-check-label" for="flexSwitchCheckDefault">Expenses</label>
                       </div>
                     <div className="col-12 col-lg-4 col-md-4 ">
         <input type="text" className="form-control mb-2" name="Date" placeholder=" Amount... " id=""
         onChange={(e)=>{
          setTransaction(e.target.value);
         }}/>
         <input type="Date" className="form-control mb-2"  placeholder="Date... " id="Date" onChange={(e)=>{
                    setDate(e.target.value);
                }}/>
        
         <small id="helpId" className="form-text text-muted"> Category</small>
         <select className="form-select mb-2" name="Category" id="iq"  onChange={(e)=>{
                    setCategory(e.target.value);
                }} 
          >
   
           <option value="">Choose...</option>
           <option>Food </option>
           <option>Transport </option>
           <option>Entertainment</option>
         </select>
         <div className="mb-3">
             <label for="exampleFormControlTextarea1" className="form-label"> you can add a
                 description</label>
             <textarea className="form-control" id="exampleFormControlTextarea1" name="Description" rows="3"
             onChange={(e)=>{
              setDescription(e.target.value);
          }}
             ></textarea>
           </div>
         <button className="btn btn-sm btn-info" onClick={Create}>Create</button>  
     </div>
                    </div>
           </div>
               <div className="tab-pane fade " id="nav-category" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="row  p-5">
                 <div className="col-12 col-lg-2 col-md-2"></div>
    <div className="col-12 col-lg-4 col-md-4 ">
     <input type="text" className="form-control mb-2" name="" placeholder="new Category" id=""/>
 <button className="btn btn-sm btn-info">Add</button>  
 </div>
                </div>
                   </div>
             </div>
         </div>
                 </div>
                 
    </>)
}
export default Transaction;