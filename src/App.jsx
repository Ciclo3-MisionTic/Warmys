/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./css/animate.css";
import "./css/bootstrap-grid.css";
import "./css/bootstrap-grid.css.map";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-grid.min.css.map";
import "./css/bootstrap-reboot.css";
import "./css/bootstrap-reboot.css.map";
import "./css/bootstrap-reboot.min.css";
import "./css/bootstrap-reboot.min.css.map";
import "./css/bootstrap.css";
import "./css/bootstrap.css.map";
import "./css/bootstrap.min.css";
import "./css/bootstrap.min.css.map";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import {BrowserRouter as Router,Switch,Route,useParams} from "react-router-dom";
import Index from './pages/Index';




function App() {
  return (
   
<div>
<Router>
        <Switch>
          
          <Route path="/login">
            <Login/>
          </Route>

        
          <Route path="/">
            <Index/>
          </Route>
          
        </Switch>
</Router>
</div>
  
  );
}

export default App;
