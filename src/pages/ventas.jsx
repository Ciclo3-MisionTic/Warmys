<<<<<<< HEAD
import "../css/ventas.css";
=======
import "../ventas.css"
>>>>>>> 2cc8ef3d76875af21f1af6b052103d1e7851efbb
import { Link } from 'react-router-dom';


function Ventas() {
    return (
      <div>
  
            <form action="">
                    <div class="form">
                        <h1>Registrar Nueva Venta</h1>
                        
                        
                            <div className="grupo">
                                <input id="idVenta"  placeholder="ingrese id venta"/><span class="barra"></span>
                                <label>Ingrese id Venta</label>
                            </div>

                            <div className="grupo">
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
  
  export default Ventas;