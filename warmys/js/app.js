function myFunction() {
    // Get the value of the input field with id="numb"
    //let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    //let text;
    //if (isNaN(x) || x < 1 || x > 10) {
      //text = "Input not valid";
    //} else {
      //text = "Input OK";
    //}
    //document.getElementById("demo").innerHTML = text;

    // Capturamos todo lo ingresado en las casillas
    let x1 = document.getElementById("idVenta").value;
    let x2 = document.getElementById("valorVenta").value;
    let x3 = document.getElementById("idProducto").value;
    let x4 = document.getElementById("cantProducto").value;
    let x5 = document.getElementById("precioUniProducto").value;
    let x6 = document.getElementById("fechaVenta").value;
    let x7 = document.getElementById("docIdentificacion").value;
    let x8 = document.getElementById("nombreCliente").value;

    // Devolvemos al html lo capturado.
    document.getElementById("linea0").innerHTML = "Información de la venta registrada:";
    document.getElementById("linea1").innerHTML = "ID venta:" + x1;
    document.getElementById("linea2").innerHTML = "Valor venta:" + x2;
    document.getElementById("linea3").innerHTML = "ID producto:" + x3;
    document.getElementById("linea4").innerHTML = "Cantidad del producto:" + x4;
    document.getElementById("linea5").innerHTML = "Precio unitario del producto:" + x5;
    document.getElementById("linea6").innerHTML = "Fecha de la venta:" + x6;
    document.getElementById("linea7").innerHTML = "Documento de identificación:" + x7;
    document.getElementById("linea8").innerHTML = "Nombre del cliente:" + x8;

    
}