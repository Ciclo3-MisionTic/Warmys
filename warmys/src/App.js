import './App.css';
import './Styles/estilosVtas.css';
import 'bootstrap/dist/css/bootstrap.css';
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Pdtos from 'pages/Admin/Pdtos';
import Roles from 'pages/Admin/Roles';
import Vtas from 'pages/Admin/Vtas';
import Ventas from 'pages/ventas';
import RegistroVtas from 'pages/Admin/vtas/RegistroVtas';
import TablaVtas from './pages/Admin/vtas/TablaVtas';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayouts';
import AuthLayout from 'layouts/AutheLayout';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path= {['/Admin/Pdtos', '/Admin/Vtas','./pages/Admin/vtas/RegistroVtas', './pages/Admin/vtas/TablaVtas','pages/ventas', '/Admin/Roles']}>
            <PrivateLayout>
              <Switch>
                <Route path ="/Admin/Pdtos">
                  <Pdtos />
                </Route>
                <Route path ="/Admin/Vtas">
                  <Vtas />
                </Route>
                <Route path ='pages/Admin/vtas/RegistroVtas'>
                  <RegistroVtas />
                </Route>
                <Route path ='./pages/Admin/vtas/TablaVtas'>
                  <TablaVtas />
                </Route>
                <Route path ="/Admin/Roles">
                  <Roles />
                </Route>
                <Route path ="/Admin/ventas">
                  <Ventas />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path= {['/pages/Login']}>
            <AuthLayout>
              <Route path ="/pages/Login">
                <Login />
              </Route>
            </AuthLayout>
          </Route>
          <Route path = {['/']}>
            <PublicLayout>
              <Route path ="/">
                <Index />
              </Route>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

