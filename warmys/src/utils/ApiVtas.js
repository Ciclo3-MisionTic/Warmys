import axios from 'axios';


const url = "http://localhost:5000";





export const crearVenta = async (data, successCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url: `${url}/ventas/`,
		headers: {
			'Content-Type': 'application/json',
			
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};


export const obtenerVentas = async (successCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: `${url}/ventas/`,
		headers: {
			'Content-Type': 'application/json',
			
		},
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};


export const editarVentas = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `${url}/ventas/${id}/`,
		headers: {
			'Content-Type': 'application/json',
			
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};


export const eliminarVentas = async (id, successCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `${url}/ventas/${id}/`,
		headers: {
			'Content-Type': 'application/json',
			
		},
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};