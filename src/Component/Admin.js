import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'

export default function Admin(){
return(<>
<div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
<table className="table caption-top">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">userName</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <th scope="row">1</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td><button  className="btn mx-2 btn-sm btn-danger">delete</button>  
            <Link  className="btn btn-sm btn-info" to="/Singletransaction">view</Link> 
         </td>
          </tr>
         
        </tbody>
      </table> 

</div>
</>)
}
