import './App.css';
import Accounts from './pages/Accounts';
import Home from './pages/Home';
import Cards from './pages/Cards';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProtectedRoute from './pages/ProtectedRoute';
import { useContext, useState } from 'react';
import UseAuth from './UseAuth';
import { authContext, Authprovider} from './Authprovider';
import Login from './pages/Login';
import Courses from './pages/CoursesPage/Courses';
import About from './pages/About';


function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoggedIn, login, logout, setIsLoggedIn] = UseAuth();

  const context = useContext(authContext);
  const {isLoggedIn,setIsLoggedIn} = context;

  const login = () =>{
    setIsLoggedIn(true);
  };

  const logout =() =>{
    setIsLoggedIn(false);
  }

  return (
    // <Authprovider>

    <div className="App">
    {/* {isLoggedIn ?  <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>:
      <button type="button" className="btn btn-primary" onClick={login}>Log In</button>
} */}
      <Router>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Learn It!</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
            <Link  class="nav-link" to="/">Home</Link>
          </li>
          <li>
            <Link  class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
                      <Link class="nav-link" to="/accounts">Courses</Link>
          </li>
        
      </ul>
      <span class="navbar-text">
      {isLoggedIn ? (
              <button type="button" className="btn btn-danger" onClick={logout}>
                Log Out
              </button>
            ) : (
              <Link class="nav-link" to="/login">
                <button type="button" className="btn btn-primary" >
                  Log In
                </button>
              </Link>
            )}      </span>
    </div>
  </div>
</nav>

        <Routes>
        <Route path="/" element={<Home/>} />        
        <Route path="/about" element={<About/>} />
          <Route path='/accounts'
            element={
              <ProtectedRoute auth = {isLoggedIn}>
                <Courses />
              </ProtectedRoute>
            }
          /> 
          
          <Route path='/login' element= {<Login/>}/>
            </Routes>

      </Router>
    </div>

    // </Authprovider>
  );
}

export default App;
