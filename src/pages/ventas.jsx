
import "../css/ventas.css";
import { Link } from 'react-router-dom';


function Ventas() {
    return (
      <div className="body3">
  
            <form action="">
                    <div class="cel">
                        <h1>Registrar Nueva Venta</h1>
                        
                        
                            <div className="grupis">
                                <input id="idVenta"  placeholder="ingrese id venta"/><span class="barra"></span>
                                <label>Ingrese id Venta</label>
                            </div>

                            <div className="grupis">
                                <input type="texto"  placeholder="ingrese valor"/><span class="barra"></span>
                                <label>Valor Venta</label>
                            </div>  

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese id"/><span class="barra"></span>
                                <label>Id Producto</label>
                            </div>

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese cantidad"/><span class="barra"></span>
                                <label>Cantidad del Producto</label>
                            </div>

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese precio"/><span class="barra"></span>
                                <label>Precio und. Producto</label>
                            </div>

                            <div class="grupis">
                                <input type="date"  placeholder="ingrese fecha"/><span class="barra"></span>
                                <label>Fecha de Venta</label>
                            </div>

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese no."/><span class="barra"></span>
                                <label>Documento de identificacion</label>
                            </div>

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese nombre"/><span class="barra"></span>
                                <label>Nombre Cliente</label>
                            </div>
                    </div>
                </form>





            <script src="app.js"></script>


            <button id="cir" type="submit" onclick="myFunction()">Registar Venta</button>

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