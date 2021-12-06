import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
//makes this the home page or what the first thing that loads in. 
//in my case it will be the login
import Home from "./pages/Home.js";
import CreateAccount from "./pages/CreateAccount.js";
import InstagramLog from "./pages/InstagramLog.js";
import CreateAction from "./pages/CreateAction.js";


function App() {     
  return ( 
  <div className ="App"> 
    <Router>
      <li>
        <Link to="/createaccount" >Create account</Link>
        </li>
      <li>
        <Link to="/Home" >homepage</Link>
      </li>
      <li>
      <Link to="/InstagramLog"> Instagram Log In</Link>
      </li>
      <li>
      <Link to="/CreateAction"> Instagram Action</Link>
      </li>

      
      <Routes>
      <Route path = "Home" element = {<Home /> } />
        <Route path = "CreateAccount" element = {<CreateAccount />} />
        <Route path = "InstagramLog" element = {<InstagramLog />} />
        <Route path = "CreateAction" element = {<CreateAction />} />

      </Routes>
    </Router>
  </div>
  );
}

export default App;
