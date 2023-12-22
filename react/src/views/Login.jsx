import { Link } from "react-router-dom";
import { useState } from "react";

const Visibility = <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>;
	
const VisibilityOff = <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/></svg>;

const Login = () => {
	const [pwdType, setPwdType] = useState(true);
	const Brand = '/public/skillnotes.svg';

	const onSubmit = (e) => {
		e.preventDefault();
	}

	document.addEventListener('onautocomplete', (e) => {
		e.target.hasAttribute('autocompleted');
		e.preventDefault();
	});

	const showPassword = (e) => {
		const inputPass = e.currentTarget.nextElementSibling;
		setPwdType(inputPass.type !== 'password');
		inputPass.type = (inputPass.type !== 'password') ? 'password' : 'text';
	}

	const focusInput = (e) => {
		const inputEl = e.currentTarget;
		const labelEl = inputEl.nextElementSibling;

		if (inputEl.classList.contains('is-invalid')) {
			labelEl.classList.add('in-top', 'foc-blue', 'is-invalid');
		} else {
			labelEl.classList.add('in-top', 'foc-blue');
		}
	}
	const blurInput = (e) => {
		const inputEl = e.currentTarget;
		const labelEl = inputEl.nextElementSibling;

		if (labelEl.classList.contains('foc-blue')) {
			if (inputEl.value.length <= 0) {
				if (inputEl.classList.contains('is-invalid')) {
					labelEl.classList.remove('in-top', 'foc-blue', 'is-invalid');
				} else {
					labelEl.classList.remove('in-top', 'foc-blue');
				}
			} else {
				if (!inputEl.classList.contains('is-invalid')) {
					labelEl.classList.remove('foc-blue', 'is-invalid');
				}
			}
		}
	}

	return (
		<form className="p-3 w-100 h-100" onSubmit={onSubmit}>
			<div className='form-login-row m-auto mt-2'>
				<div className="mb-5 d-flex justify-content-center">
					<img src={Brand} alt="brand-skillnotes" width='70' height='70' />
				</div>
				<div>
					<h1 className="mb-4 form-headline">
						<strong>Sign in to SkillNotes</strong>
					</h1>
				</div>
				<div className="control-box">
					<input onFocus={focusInput} onBlur={blurInput} className='form-control mb-4' type='email' name="email" id="email" title="Phone, email or username" autoFocus />
					<label htmlFor="email" className="form-label">Phone, email or username</label>
				</div>
				<div className="control-box">
					<span className="bullseye" onClick={showPassword}>
						{pwdType ? VisibilityOff : Visibility}
					</span>
					<input onFocus={focusInput} onBlur={blurInput} className='form-control mb-4 pe-5 password' type='password' name="password" id="password" title="Password" />
					<label htmlFor="password" className="form-label">Password</label>
				</div>
				<div>
					<button className="btn btn-dark px-5 mb-4 w-100">Log in</button>
				</div>
				<div>
					<Link to='/password_reset' className="btn btn-light px-5 mb-4 w-100 border" title="Forgot Password">Forgot Password?</Link>
				</div>
				<div className="text-secondary text-center">
				Don't have an account?&nbsp;
					<Link to='/signup' title="Sign up">Sign up</Link>
				</div>
			</div>
		</form>
	)
}

export default Login;