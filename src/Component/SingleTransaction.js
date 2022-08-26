import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import imge from '../img/erica-photo1-full.jpg'
function SingleTransaction(){
    return(

    <div class="container col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="row">
                <div class="col-12 col-lg-3 col-md-3 p-5 me-auto">
                    <div class="about-img"> 
            <img src={imge} alt="" class="rounded img-fluid"/>
                </div>
                <p>Misaeldessalegn@gmail.com</p>
                </div>
                <div class="col-12 p-5 ms-auto col-lg-8 col-md-8 ">
               <p>What  he/she Have?</p>
               <span >INCOME</span>
                <div class="progress mb-2">
                  <div class="progress-bar" role="progressbar" style={{width: "25%;"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                  </div>
                  <span>Expenses</span>
                  <div class="progress mb-2">
                <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                  </div>
                  <span>Balance</span>
                  <div class="progress mb-2">
                    <div class="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
                  </div>   
            </div>

        </div>
       
           
            
      
       
       <div class="container">
        <div class="row">
            <div class="col-12 col-md-12 col-lg-12 p-5 ms-auto">
                <table class="table caption-top">
                    <caption><strong class="text-primary fs-5">All Activity</strong></caption>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">income</th>
                        <th scope="col">Transaction</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td><button  class="btn btn-sm btn-danger">delete</button>  
                     </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Otto</td>
                        <td><button  class="btn btn-sm btn-danger">delete</button>  
                     </td>
                      </tr>
        
                    </tbody>
                  </table>  
            </div>

        </div>
       </div>
    </div>

);
}
export default SingleTransaction;