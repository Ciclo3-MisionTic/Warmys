import React from 'react';

const Footer = () => {
    return (
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
    )
}
export default Footer;





