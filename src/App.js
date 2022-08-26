import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav,useParams} from 'react-router-dom'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import Dashbord from './Component/Dashbord'
import Transaction from './Component/Transaction'
import Admin from './Component/Admin'
import SingleTransaction from './Component/SingleTransaction'
import { useEffect, useState } from 'react'
import Logout from './Component/Logout'
export default function App() {
  const [showNav, setShowNav] = useState(true);
  const [userid,setUserId]=useState('');
   
 
  useEffect(()=>{
    setUserId(sessionStorage.getItem('userid'));
},[])
  return (
     <>
    
    <Router>
    {!userid?(
      <>
      <Routes> 
       <Route exact path="/" element={<Login/>}/>
       </Routes>
      </>
     ):(
      <> 
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">1888 E.c  </a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <Link class="nav-link px-3" to="/logout">Sign out </Link>
          </div>
        </div>
      </header>
      <div class="container-fluid">
    <div class="row ">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse fixed">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  <span data-feather="home"></span>
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Transaction">
                  <span data-feather="file"></span>
                 Transactions
                </Link>
              </li>
             
              <li class="nav-item">
                <Link class="nav-link" to="/Admin">
                  <span data-feather="users"></span>
                Admin Dashboard
                </Link>
              </li>
             
            </ul>
    
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Get out</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <Link class="nav-link" to="/logout">
                  <span data-feather="file-text"></span>
                 Log out
                </Link>
              </li>
             
            </ul>
          </div>
        </nav>
   
    <Routes> 
    <Route exact path="/" element={<Dashbord/>}/>
    <Route exact path="/SignUp" element={<SignUp/>}/>  
 <Route exact path="/Dashbord/:type" element={<Dashbord/>}/>
 <Route exact path="/Transaction" element={<Transaction/>}/>
  <Route exact path="/Admin" element={<Admin/>}/>
  <Route exact path="/Singletransaction" element={<SingleTransaction/>}/>
  <Route exact path="/logout" element={<Logout/>}/>
  </Routes>
  </div>
      </div>
         </>
         )}
     </Router>

  </>
  );
}


