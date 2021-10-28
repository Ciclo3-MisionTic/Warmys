import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Dialog, Tooltip } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
 

const Vtas = () => {

//Definición de estados, si deseamos que inicialice vacio se deja (" ") y si deseamos que inicialice con un vtas se ubica dentro del parentesis
   
    const [mostrarVtas, setMostrarVtas] =useState (false);
    const [textoBotonListar, setTextoBotonListar] = useState('cerrar');
    const [mostrarTablaActualizada, setMostrarTablaActualizada] = useState (true);
    const [data, setData] = useState ([]);
   
    useEffect (() => {
        const ObtenerVtas = async (setData, setMostrarTablaActualizada) =>{
            const options = {
                method: 'GET',
                url: 'http://localhost:5000/vtas',
                headers: {'Content-Type': 'application/json'}
              };
              
              await axios.request(options).then(function (response) {
                setData(response.data);
              }).catch(function (error) {
                console.error(error);
              });
        }
        if (mostrarTablaActualizada){
            ObtenerVtas();
            setMostrarTablaActualizada(false);
        }
    },[mostrarTablaActualizada])

    

    //Obtener lista de data desde Backend
    useEffect(() => {}, []);

    useEffect (() => {
        if(mostrarVtas){
           setMostrarTablaActualizada(true);
        }       
    }, [mostrarVtas] );

   

    useEffect(() => {
    if (mostrarVtas) {
        setTextoBotonListar('Cerrar');
    } else {
        setTextoBotonListar('Listar Ventas');
    }
    }, [mostrarVtas]);

  

    return (
        <div>
            <main>
                <nav className = "topnav">
                    <h1>Ventas</h1>
                    <Link to ='/Admin/RegistroVtas'> <button className = "topButton1">Registrar</button></Link>                   
                    <Link to='/Admin/TablaVtas'> <button className = "topButton1">Listar</button></Link>
                </nav>
               
            </main>
        </div>
    );
}


export default Vtas;