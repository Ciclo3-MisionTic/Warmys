import '../App.css';
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
import azul from "../images/about-us-bg.jpg";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";






function Index() {
  return (
    <div className="App">
    
    <div class="container-fluid pl-0 pr-0 bg-img clearfix parallax-window2" data-parallax="scroll" data-image-src="../images/banner2.jpg">
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container"> 
        <a class="navbar-brand mr-auto" href="/#"><img src="images/logo.png" alt="FoxPro"  width="60px"/></a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span class="navbar-toggler-icon"></span> </button>   
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"> <a class="nav-link" href="/#">Hogar</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#about-us">Acerca de</a> </li>
            <li class="nav-item"> <a class="nav-link" href="/#">Cursos</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#Contact">Contacto</a> </li>
          </ul>
          <ul class="navbar-nav ml-5">
        </ul>
        </div>
      </div>
    </nav>
  <div class="container">
    <div class="fh5co-banner-text-box">
      <div class="quote-box pl-5 pr-5 wow bounceInRight">
        <h2> WARMYS <span> tejiendo memoria colectiva</span> </h2>
      </div>
      <Link to="login" class="btn text-uppercase btn-outline-danger btn-lg mr-3 mb-3 wow bounceInUp">Ingresar</Link>
  </div>
  </div>
  </div>
  <div class="container-fluid fh5co-network">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h4 class="wow bounceInUp">FOR NETWORK</h4>
        <h2 class="wow bounceInRight">MEMBERS</h2>
        <hr />
        <h5 class="wow bounceInLeft">NETWORK SUMMER 2017</h5>
        <p class="wow bounceInDown">¿Has escuchado de mercados que contribuyan de manera efectiva a la economía de las mujeres indígenas y rurales del territorio?
        </p>
      </div>
      <div class="col-md-6">
        <figure class="wow bounceInDown"> <img src="images/about-img.jpg" alt="gym" class="img-fluid" /> </figure>
      </div>
    </div>
  </div>
</div>


<div id="about-us" class="container-fluid fh5co-about-us pl-0 pr-0 parallax-window" data-parallax="scroll" data-image-src={azul}>
  <div class="container">
    <div class="col-sm-6 offset-sm-6">
      <h2 class="wow bounceInLeft" data-wow-delay=".25s">SOBRE NOSOTROS</h2>
      <hr/>
      <p class="wow bounceInRight" data-wow-delay=".25s">Somos una empresa cuyo objetivo social es potenciar económicamente el trabajo colectivo de las mujeres indígenas del resguardo de Males del pueblo de los Pastos, que contribuyen a la preservación,   defensa y cuidado del territorio, que buscan generar ingresos para sus hogares a partir de la creación de  diversas artesanías en cuanto a tejidos (realizados en agujeta/crochet, agujones/agujas, guangas/telares), alfarería (madera, barro y cerámica), toallas ecológicas menstruales y bisutería.  </p>
      <a class="btn btn-lg btn-outline-danger d-inline-block text-center mx-auto wow bounceInDown">Aprende Mas</a> </div>
  </div>
</div>




<div class="container-fluid fh5co-content-box">
  <div class="container">
    <div class="row">
      <div class="col-md-5 pr-0"><img src="images/rode-gym.jpg" alt="gym" class="img-fluid wow bounceInLeft" /> </div>
      <div class="col-md-7 pl-0">
        <div class="wow bounceInRight" data-wow-delay=".25s">
          <div class="card-img-overlay">
            <p>«Quisiera que siguiéramos adelante en este proceso de tejido de la artesanía, recordando nuestra propia cultura para que no se pierda».
              Humberto Cumbalaza. </p>
          </div>
          <img src="images/gym-girls.jpg" alt="girls in gym" class="img-fluid" /> </div>
      </div>
    </div>
    <div class="row trainers pl-0 pr-0">
      <div class="col-12 bg-50">
        <div class="quote-box2 wow bounceInDown" data-wow-delay=".25s">
          <h2> WARMYS</h2>
        </div>
      </div>
      <div class="col-md-6 pr-5 pl-5">
        <div class="card text-center wow bounceInLeft" data-wow-delay=".25s"> <img class="card-img-top rounded-circle img-fluid" src="images/trainers1.jpg" alt="Card image"/>
          <div class="card-body mb-5">
            <h4 class="card-title">MEMORIA</h4>
            <p class="card-text">La vida de los Pastos se desenvuelve en el suroccidente del departamento de Nariño, en los Andes colombianos. Es una de las etnias indígenas más numerosas del país.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 pl-5 pr-5">
        <div class="card text-center wow bounceInRight" data-wow-delay=".25s"> <img class="card-img-top rounded-circle img-fluid" src="images/trainers2.jpg" alt="Card image"/>
          <div class="card-body mb-5">
            <h4 class="card-title">CREATIVIDAD</h4>
            <p class="card-text">Los Pastos deben su inspiración al armonioso paisaje que los rodea. Las colecciones que se crearon con el grupo son muestra de esta estrecha relación con la naturaleza.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row gallery">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body mb-4 wow bounceInLeft" data-wow-delay=".25s">
            <h4 class="card-title">BARNIZ DE PASTO</h4>
            <p class="card-text">Declarada Patrimonio Cultural Inmaterial de la Humanidad por la Unesco en 2020, esta técnica artesanal, conocida también con el nombre de ‘mopa-mopa’, guarda los secretos de un territorio artesano por tradición: Pasto, Nariño. ¡Conozca parte de su origen!.</p>
          </div>
          <img class="card-img-top img-fluid wow bounceInRight" data-wow-delay=".25s" src="images/g1.jpg" alt="Card image"/> </div>
      </div>
      <div class="col-md-4">
        <div class="card"> <img class="card-img-top img-fluid wow bounceInUp" data-wow-delay=".25s" src="images/g2.jpg" alt="Card image"/>
          <div class="card-body mt-4 wow bounceInDown" data-wow-delay=".25s">
            <h4 class="card-title">PRODUCTOS UNICOS</h4>
            <p class="card-text"> Una labor que desde tiempos remotos, se convirtió en parte fundamental de la cultura pastusa y que, hasta el día de hoy, sigue transmitiéndose de generación en generación. Pasto es fuente de inspiración para los artesanos que trabajan el mopa-mopa.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body mb-4 wow bounceInRight" data-wow-delay=".25s">
            <h4 class="card-title">TRADICION UNICA</h4>
            <p class="card-text">Si existe una tradición artesanal única en el país y el mundo, es la del barniz de Pasto. Esta técnica consiste en la decoración de diferentes piezas decorativas y utilitarias hechas en madera, con una resina de origen vegetal, proveniente del árbol de mopa-mopa.</p>
          </div>
          <img class="card-img-top img-fluid wow bounceInLeft" data-wow-delay=".25s" src="images/g3.jpg" alt="Card image"/> </div>
      </div>
    </div>
  </div>
</div>



<footer class="container-fluid">
  <div class="container">
    <div class="row">
      <div class="col-md-3 footer1 d-flex wow bounceInLeft" data-wow-delay=".25s">
        <div class="d-flex flex-wrap align-content-center"> <a href="#"><img src="images/logo.png" alt="logo" width="60px" /></a>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            dolor. Ae</p>
          <p>&copy; 2018 Foxpro. All rights reserved. Design by <a href="https://freehtml5.co" target="_blank">FreeHTML5</a>.</p>
        </div>
      </div>
      <div class="col-md-6 footer2 wow bounceInUp" data-wow-delay=".25s" id="Contact">
        <div class="form-box">
          <h4>CONTACTO</h4>
          <table class="table table-responsive d-table">
            <tr>
              <td><input type="text" class="form-control pl-0" placeholder="NOMBRE" /></td>
              <td><input type="email" class="form-control pl-0" placeholder="EMAIL" /></td>
            </tr>
            <tr>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="2"><input type="text" class="form-control pl-0" placeholder="DIRECCION" /></td>
            </tr>
            <tr>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="2"><input type="text" class="form-control pl-0" placeholder="MENSAJE" /></td>
            </tr>
            <tr>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td colspan="2" class="text-center pl-0"><button type="submit" class="btn btn-dark">ENVIAR</button></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-md-3 footer3 wow bounceInRight" data-wow-delay=".25s">
        <h5>DIRECCION</h5>
        <p>Lorem ipsum dolor sit 
          amet, consectetuer adipiscing elit</p>
        <h5>TELEFONO</h5>
        <p>253232323232</p>
        <h5>EMAIL</h5>
        <p>email@example.com</p>
        <div class="social-links">
          <ul class="nav nav-item">
            <li><a href="https://www.facebook.com/fh5co" class="btn btn-secondary mr-1 mb-2"><img src="images/facebook.png" alt="facebook" /></a></li>
            <li><a href="#"  class="btn btn-secondary mr-1 ml-1 mb-2"><img src="images/facebook.png" alt="facebook" /></a></li>
            <li><a href="#"  class="btn btn-secondary mr-1 ml-1 mb-2"><img src="images/facebook.png" alt="facebook" /></a></li>
            <li><a href="#"  class="btn btn-secondary ml-1 mb-2"><img src="images/facebook.png" alt="facebook" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>




</div>
  );
}

export default Index;
