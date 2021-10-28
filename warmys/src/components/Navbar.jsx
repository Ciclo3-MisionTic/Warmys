import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {

    return (
        <div >
         <  nav className = "navbar">      
            <Link to = '/'><button className = "topButton1">Home</button></Link> 
            <Link to = '/Admin/Pdtos'> <button className = "topButton1">Productos</button></Link>
            <Link to = '/Admin/RegistroPdtos'>  <button className = "topButton1">Nuevos Productos</button></Link>
            <Link to = '/Admin/MVtas'><button className = "topButton1">Ventas</button></Link>
            <Link to = '/Admin/RegistroVtas'><button className = "topButton1">Nuevas Ventas</button></Link>
            <Link to = '/Admin/Roles'><button className = "topButton1">Usuarios</button></Link>
            <Link to = '/Admin/Perfil'><button className = "topButton1">Perfil</button></Link>                 
            </nav>
        </div>
    )
}


export default Navbar;


