import axios from 'axios';

//Ruta Local del API
//http://localhost:5000



export const addProduct = async (data, successCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url : 'http://localhost:5000/productos/',
		headers: { 
			'Content-Type':'application/json',
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const obtenerProductos = async (successCallback, errorCallback) => {
	const options = { 
		method: 'GET', 
		url: 'http://localhost:5000/productos/', 
		headers: {
			'Content-Type':'application/json',
		}
};
	await axios.request(options).then(successCallback).catch(errorCallback);
};

//Para todas las petición enviamos en el header la autorizacion del token en la propiedad Authorization: traerToken(),
export const editarProducto = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: 'http://localhost:5000/productos/${_id}/',
		headers: { 
			'Content-Type': 'application/json',
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};


export const eliminarProducto = async (id, successCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: "http://localhost:5000/Pdtos/${_id}" ,
		headers: { 
			'Content-Type': 'application/json',
		},
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};