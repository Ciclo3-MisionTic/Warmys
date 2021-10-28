import axios from 'axios';


const url = "http://localhost:5000";


export const addUser = async (data, successCallback, errorCallback) => {
	const options = {
		method: 'POST',
		url : `${url}/usuarios/`,
		headers: {
			'Content-Type': 'application/json',
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};


export const obtenerUsuarios = async (successCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: `${url}/usuarios/`,
		headers: {
			'Content-Type': 'application/json',
		}, };
	await axios.request(options).then(successCallback).catch(errorCallback);
};


export const obtenerEsteUsuario = async (successCallback, errorCallback) => {
	const options = {
		method: 'GET',
		url: `${url}/usuarios/iam`,
		headers: {
			'Content-Type': 'application/json',
		}, };
	await axios.request(options).then(successCallback).catch(errorCallback);
};


export const editarUsuario = async (id, data, successCallback, errorCallback) => {
	const options = {
		method: 'PATCH',
		url: `${url}/usuarios/${id}/`,
		headers: {
			'Content-Type': 'application/json',
			
		},
		data,
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};


export const eliminarUsuario = async (id, successCallback, errorCallback) => {
	const options = {
		method: 'DELETE',
		url: `${url}/usuarios/${id}/`,
		headers: {
			'Content-Type': 'application/json',
		},
	};
	await axios.request(options).then(successCallback).catch(errorCallback);
};