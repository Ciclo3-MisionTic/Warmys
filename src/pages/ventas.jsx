import "../css/ventas.css"
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


function ventas() {
    return (
      <div>
  
            <form action="">
                    <div class="form">
                        <h1>Registrar Nueva Venta</h1>
                        
                        
                            <div class="grupo">
                                <input id="idVenta"  placeholder="ingrese id venta"/><span class="barra"></span>
                                <label>Ingrese id Venta</label>
                            </div>

                            <div class="grupo">
                                <input type="texto"  placeholder="ingrese valor"/><span class="barra"></span>
                                <label>Valor Venta</label>
                            </div>  

                            <div class="grupo">
                                <input id="idVenta"  placeholder="ingrese id"/><span class="barra"></span>
                                <label>Id Producto</label>
                            </div>

                            <div class="grupo">
                                <input id="idVenta"  placeholder="ingrese cantidad"/><span class="barra"></span>
                                <label>Cantidad del Producto</label>
                            </div>

                            <div class="grupo">
                                <input id="idVenta"  placeholder="ingrese precio"/><span class="barra"></span>
                                <label>Precio und. Producto</label>
                            </div>

                            <div class="grupo">
                                <input type="date"  placeholder="ingrese fecha"/><span class="barra"></span>
                                <label>Fecha de Venta</label>
                            </div>

                            <div class="grupo">
                                <input id="idVenta"  placeholder="ingrese no."/><span class="barra"></span>
                                <label>Documento de identificacion</label>
                            </div>

                            <div class="grupo">
                                <input id="idVenta"  placeholder="ingrese nombre"/><span class="barra"></span>
                                <label>Nombre Cliente</label>
                            </div>
                    </div>
                </form>





            <script src="app.js"></script>


            <button type="submit" onclick="myFunction()">Registar Venta</button>

            <p id="linea0"></p>
            <p id="linea1"></p>
            <p id="linea2"></p>
            <p id="linea3"></p>
            <p id="linea4"></p>
            <p id="linea5"></p>
            <p id="linea6"></p>
            <p id="linea7"></p>
            <p id="linea8"></p>
      
          
     
  
  
  
      </div> 
    );
  }
  
  export default ventas;