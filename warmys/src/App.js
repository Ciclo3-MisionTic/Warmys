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
import RegistroPdtos from 'pages/Admin/RegistroPdtos';
import Usuarios from 'pages/Admin/Roles';
import Perfil from 'pages/Admin/Perfil';
import Vtas from 'pages/Admin/Vtas';
import MVtas from 'pages/Admin/MVtas';
import Ventas1 from 'pages/Admin/Ventas1';
import Ventas from 'pages/ventas';
import RegistroVtas from 'pages/Admin/RegistroVtas';
import TablaVtas from './pages/Admin/TablaVtas';
import PrivateLayout from 'layouts/PrivateLayouts';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          '<Route path= {['/Admin/Pdtos','/Admin/RegistroPdtos','/Admin/Vtas', '/Admin/MVtas','/Admin/Ventas1','/Admin/RegistroVtas', '/Admin/TablaVtas','/ventas', '/Admin/Roles', '/Admin/Perfil']}>
            <PrivateLayout>
              <Switch>
                <Route path ="/Admin/Pdtos">
                  <RegistroPdtos />
                </Route>
                <Route path ="/Admin/RegistroPdtos">
                  <Pdtos />
                </Route>
                <Route path ="/Admin/Vtas">
                  <Vtas />
                </Route>
                <Route path ="/Admin/RegistroVtas">
                  <RegistroVtas />
                </Route>
                <Route path ="/Admin/TablaVtas">
                  <TablaVtas />
                </Route>
                <Route path ="/Admin/MVtas">
                  <MVtas />
                </Route>
                <Route path ="/Admin/Ventas1">
                  <Ventas1 />
                </Route>
                <Route path ="/Admin/Roles">
                  <Usuarios />
                </Route>
                <Route path ="/Admin/Perfil">
                  <Perfil />
                </Route>
                <Route path ="/ventas">
                  <Ventas />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path = {['/Login']}>
              <Route path ="/Login">
                <Login />
              </Route>
              </Route>
          <Route path = {['/']}>
            <Route path ="/">
                <Index />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

