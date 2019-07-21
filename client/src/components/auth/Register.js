import React, { useState } from 'react';
import {register} from '../../actions/auth'; 
import {setAlert} from '../../actions/alert'; 
import {connect} from 'react-redux'
import './Auth.scss'; 

const Register = ({register, setAlert, history}) => {
	const [formData, setFormData] = useState({
		password: '',
    email: '', 
    password2: ''
	});

	const { password, email, password2 } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async(e) => {
    e.preventDefault()
    if(email && password && password2){
			if(password === password2){
				register(email, password, history)
			}else{
				setAlert('password and email are required', 'danger')
			}
    }
  };
	return (
		<div>
			<form onSubmit={onSubmit} className='login__form'>
        <label htmlFor="email" className="login__label">email</label>
				<input className="login__input" type="text" name="email" onChange={(e) => onChange(e)} />
        <label htmlFor="password" className="login__label">password</label>
				<input className="login__input" type="text" name="password" onChange={(e) => onChange(e)} />
        <label htmlFor="password" className="login__label">re-enter your password</label>
				<input className="login__input" type="text" name="password2" onChange={(e) => onChange(e)} />
        <button className="login__button">confirm</button>
			</form>
		</div>
	);
};

export default connect(null, {register, setAlert})(Register);