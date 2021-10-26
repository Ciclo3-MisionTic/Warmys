
import "../css/ventas.css";
import { Link } from 'react-router-dom';


function Ventas() {
    return (
      <div className="new">
  
            <form action="form">
                    <div class="cel">
                        <h1>Registrar Nueva Venta</h1>
                        
                        
                            <div className="grupis">
                                <input id="idVenta"  placeholder="ingrese id venta"/><span class="barra"></span>
                                <label1>Ingrese id Venta</label1>
                            </div>

                            <div className="grupis">
                                <input type="texto"  placeholder="ingrese valor"/><span class="barra"></span>
                                <label1>Valor Venta</label1>
                            </div>  

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese id"/><span class="barra"></span>
                                <label1>Id Producto</label1>
                            </div>

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese cantidad"/><span class="barra"></span>
                                <label1>Cantidad del Producto</label1>
                            </div>

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese precio"/><span class="barra"></span>
                                <label1>Precio und. Producto</label1>
                            </div>

                            <div class="grupis">
                                <input type="date"  placeholder="ingrese fecha"/><span class="barra"></span>
                                <label1>Fecha de Venta</label1>
                            </div>

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese no."/><span class="barra"></span>
                                <label1>Documento de identificacion</label1>
                            </div>

                            <div class="grupis">
                                <input id="idVenta"  placeholder="ingrese nombre"/><span class="barra"></span>
                                <label1>Nombre Cliente</label1>
                            </div>
                    </div>
                    <button type="submit" onclick="myFunction()">Registar Venta</button>
                </form>





            <script src="app.js"></script>


            

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