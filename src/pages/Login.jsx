import '../css/login.css';
import "../css/animate.css";
import "../css/bootstrap-grid.css";
import "../css/bootstrap-grid.css.map";
import "../css/bootstrap-grid.min.css";
import "../css/bootstrap-grid.min.css.map";
import "../css/bootstrap-reboot.css";
import "../css/bootstrap-reboot.css.map";
import "../css/bootstrap-reboot.min.css";
import "../css/bootstrap-reboot.min.css.map";
import "../css/bootstrap.css";
import "../css/bootstrap.css.map";
import "../css/bootstrap.min.css";
import "../css/bootstrap.min.css.map";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';





function Login() {
  return (
    <div>

        <div class="end"><img src="/warmys/images/logo copy.png" alt=""/>
        </div>
        <div class="login-wrap">
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked/>
                    <label for="tab-1" class="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up"/>
                    <label for="tab-2" class="tab">Sign Up</label>
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group">
                            <label for="user" class="label">Username</label>
                            <input id="user" type="text" class="input"/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" class="input" data-type="password"/>
                        </div>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked/>
                            <label for="check"><span class="icon"></span> Keep me Signed in</label>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Sign In"/>
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                        <div >
                        <Link to="/index"><img src="../images/logo.png" alt="logo" className="lo" /></Link>
                        </div>
                    </div> 
                    <div class="sign-up-htm">
                        <div class="group">
                            <label for="user" class="label">nombre</label>
                            <input id="user" type="text" class="input"/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" class="input" data-type="password"/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Repeat Password</label>
                            <input id="pass" type="password" class="input" data-type="password"/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Email Address</label>
                            <input id="pass" type="text" class="input"/>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Sign Up"/>
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <label for="tab-1"/><a>Already Member?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
   



    </div> 
  );
}

export default Login;
