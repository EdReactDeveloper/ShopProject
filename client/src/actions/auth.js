import { AUTH_SUCCESS, AUTH_FAIL, USER_LOADED, LOGOUT_SUCCESS } from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const getUser = () => async dispatch => {
	try {
		const res = await axios.get('/api/users/');
		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (error) {
		dispatch({
			type: AUTH_FAIL
		});
	}
};

export const register = (email, password, history) => async dispatch => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	const body = JSON.stringify({ email, password });
	try {
		await axios.post('/api/users/register', body, config);
		dispatch(setAlert('user created! now log in the syster', 'success'));
		history.push('/login');
	} catch (error) {
		const errors = error.response.data.errors;
		if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		dispatch({
			type: AUTH_FAIL
		});
	}
};

export const login = (email, password, history) => async dispatch => {
	const config = { headers: { 'Content-Type': 'application/json' } };
	const body = JSON.stringify({ email, password });
	try {
		const res = await axios.post('/api/users/login', body, config);
		dispatch({
			type: AUTH_SUCCESS,
			payload: res.data
		});
		history.push('/');
	} catch (error) {
		const errors = error.response.data.errors;
		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: AUTH_FAIL
		});
	}
};

export const logout = () => async dispatch => {
	try {
		await axios.post('/api/users/logout');
		dispatch({
			type: LOGOUT_SUCCESS
		});
	} catch (error) {
		dispatch({
			type: AUTH_FAIL
		});
	}
};
