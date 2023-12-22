import { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";
import axiosClient from "../axios-clint";
import Select from 'react-select';
import { Visibility, VisibilityOff } from '../component/Icons/Visibility';
import Language from "../component/Form/Captcha.jsx";
import Profession from "../component/Form/Profession.jsx";
import Bullseye from "../component/Form/Bullseye.jsx";
import Input from "../component/Form/Input.jsx";
import SelectLayout from "../component/Form/SelectLayout.jsx";
import DateModel from "../Modules/DateModel.js";
import TitleAttrMode from '../Modules/TitleAttrMode.js';
import LongButton from "../component/Form/LongButton.jsx";
import CreatBtnLayout from "../component/Form/FormBtnLayout.jsx";
import ServerError from "../component/Status/ServerError.jsx";

const Signup = () => {
	const STEPS = 4;
	const THROTTLE = 10000;
	const DOM = {};

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmationRef = useRef();
	const {setUser, setSessionToken} = useStateContext();
	const [pwdType, setPwdType] = useState(false);
	const [pwdConfType, setPwdConfType] = useState(false);
	const [errors, setErrors] = useState(null);
	const [count, setCount] = useState(1);
	const [btnDisabled, setBtnDisabled] = useState('disabled');
	const [role, setRole] = useState(null);
	const [captcha, setCaptcha] = useState(null);
	const [name, setName] = useState('');
	const [focusMonth, setFocusMonth] = useState(false);
	const [focusDay, setFocusDay] = useState(false);
	const [focusYear, setFocusYear] = useState(false);
	const [selectMonth, setSelectMonth] = useState(null);
	const [selectDay, setSelectDay] = useState(null);
	const [selectYear, setSelectYear] = useState(null);
	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');
	const [pwdConfirm, setPwdConfirm] = useState('');
	const [save, setSave] = useState(false);
	const [nameNotice, setNameNotice] = useState(false);
	const [status3, setStatus3] = useState(false);
	const [status4, setStatus4] = useState(false);
	const [countLetter, setCountLetter] = useState(false);
	const [throttle, setThrottle] = useState(false);
	const [timer, setTimer] = useState(0);
	const [errStatus, setErrStatus] = useState(false);
	const date = new DateModel(selectYear, selectMonth, selectDay);

	const regex = {
		name: /^(?=.*?[\s]+[\S]+)[\w'\-.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*,(){}|~<>;:[\]]{3,50}$/,
		email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,
		password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
	};

	useEffect(() => {
		setDisplayTimer();
	}, [timer]);

	useEffect(() => {
		if (count === 3) checkStep3();
	}, [selectMonth, selectDay, selectYear]);

	const onSubmit = (e) => {
		e.preventDefault();
		if (throttle)	return;

		const resArr = [];
		const splitArr = name.trim().split(/\s/);
		splitArr.forEach((df) => (df !== '') && resArr.push(df));
		const lastName = resArr.pop();
		const firstName = (names = []) => {
			if (names.length > 1) {
				return `${names.shift()}${names.length === 0 ? '' : ' '}`.repeat(names.length);
			} else {
				return names.shift();
			}
		}
		const payload = {
			role: role,
			fristname: firstName(resArr),
			lastname: lastName,
			birth: `${selectYear}-${selectMonth}-${selectDay}`,
			email: emailRef.current.value.trim(),
			password: passwordRef.current.value,
			password_confirmation: passwordConfirmationRef.current.value,
		}

		console.log(payload)

		axiosClient.post('/signup', payload)
			.then(({data}) => {
				setUser(data.user);
				setSessionToken(data.token);
			})
			.catch((err) => (err.response) && responseErrHandling(err.response));
		setThrottle(true);
		setBtnStatus(false);
		setTimeout(() => setThrottle(false), THROTTLE);
		setTimer(THROTTLE * .001);
	}

	const setDisplayTimer = () => {
		if (throttle) {
			if (timer > 0) {
				setTimeout(() => setTimer(timer - 1), 1000);
			}
		} else {
			if (save) setBtnStatus(!throttle);
			setErrStatus(false);
		}
	}

	const responseErrHandling = (resp = {}) => {
		const { status, data, statusText } = resp;
		switch (status) {
			case 422:
				setErrors(data.errors);
				break;
			default:
				setErrStatus({
					code: status,
					data: data,
					msg: statusText,
				});
				break;
		}
	}

	document.addEventListener('onautocomplete', (e) => {
		e.target.hasAttribute('autocompleted');
		e.preventDefault();
	});

	TitleAttrMode(document.querySelectorAll('[title]'));

	const focusInput = (e) => {
		const inputEl = e.currentTarget;
		DOM.labelEl = inputEl.nextElementSibling;

		setNameStates(inputEl.name === 'name');

		if (inputEl.classList.contains('is-invalid')) {
			DOM.labelEl.classList.add('in-top', 'foc-blue', 'is-invalid');
		} else {
			DOM.labelEl.classList.add('in-top', 'foc-blue');
		}
	};

	const blurInput = (e) => {
		const inputEl = e.currentTarget;
		const labelEl = inputEl.nextElementSibling;

		setNameStates(inputEl.name === 'name', false);

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
	};

	const setNameStates = (condition = false, focus = true) => {
		if (condition) {
			setCountLetter(focus);
			setNameNotice(focus);
		}
	}

	const setBtnStatus = (fn) => (fn) ? setBtnDisabled('') : setBtnDisabled('disabled');

	const inkCounter = () => {
		if (count < STEPS) {
			switch (count + 1) {
				case 1:
					checkStep1();
					break;
				case 2:
					checkStep2();
					break;
				case 3:
					setBtnStatus(status3);
					break;
				case 4:
					setBtnStatus(status4);
					break;
				default:
					setBtnStatus(false);
					break;
			}
			setCount(count + 1);
		}
	};
	
	const dekCounter = () => {
		switch (count - 1) {
			case 1:
				checkStep1();
				break;
			case 2:
				checkStep2();
				break;
			case 3:
				setBtnStatus(status3);
				break;
			case 4:
				setBtnStatus(status4);
				break;
			default:
				setBtnStatus(false);
				break;
		}
		setCount(count - 1);
	};

	// Validation Funktions
	const validByReg = (value = {}, regex = {}) => {
		if (value.length <= 0) return null;
		return regex.test(value);
	};
	const validDateByVal = (value = '') => (value === '') ? null : true;

	const pwdConfirmation = (pwdEl = {}, pwdConfirmationEl = {}) => {
		if (pwdConfirmationEl.value.length <= 8) return null;
		return pwdEl.value === pwdConfirmationEl.value;
	};

	const findErrors = (chechArr, payload, match = '*') => {
		const errObj = {};
		const nameArr = Object.keys(payload);
		chechArr.forEach((value, i) => {
			if (value !== null && !value) {
				if (!isNaN(match) && i === match) {
					errObj[nameArr[i]] = ['The password field confirmation does not match.'];
				} else {
					errObj[nameArr[i]] = [`The ${payload[nameArr[i]].name} field is required. Please enter a valid ${payload[nameArr[i]].name}.`];
				}
				setInvalid(payload[nameArr[i]]);
			} else {
				setValid(payload[nameArr[i]]);
			}
		});
		return errObj;
	};

	// Validation Optics
	const setInvalid = (el = {}) => {
		if (el !== null) return
		el.classList.add('is-invalid');
		el.nextElementSibling.classList.add('is-invalid');
	};

	const setValid = (el = {}) => {
		if (el !== null) return
		el.classList.remove('is-invalid');
		el.nextElementSibling.classList.remove('is-invalid');
	};

	// Step 1: Profession
	const checkStep1 = () => {
		const radioItem = Array.from(document.querySelectorAll('[name="role"]'));
		radioItem.forEach((el) => {
				const val = el.value; 
				if (el.checked && val.length >= 2 && val.length <= 3) setRole(val);
			});
		role === null ? setBtnStatus(radioItem.some((el) => el.checked)) : setBtnStatus(true);
	};

	// Step 2: Captcha
	const checkStep2 = () => {
		const capt = [
			'public class Human {',
			'private byte age;',
			'public Human(byte age) {',
			'this.age = age;',
			'}',
			'public static void main(String[] args) {',
			'Human p = new Human(127);',
			'System.out.println(p);',
			'}',
			'}',
		];
		const codeArr = Array.from(document.querySelectorAll('.code-input'));
		if (captcha !== true && codeArr.length === 0) {
			setBtnStatus(false);
			return;
		};
		const checkItem = codeArr.map((el, i) => el.value.trim() === capt[i]);
		const evaluation = checkItem.every((el) => el);
		setCaptcha(evaluation);
		setBtnStatus(evaluation);
	};

	// Step 3: Name, Birth
	const checkStep3 = () => {
		const payload = {
			name: nameRef.current,
			month: document.querySelector('[name="month"'),
			day: document.querySelector('[name="day"'),
			year: document.querySelector('[name="year"'),
		};

		const checkItem = [
			payload.name !== null && validByReg(payload.name.value, regex.name),
			validDateByVal(selectMonth),
			validDateByVal(selectDay),
			validDateByVal(selectYear),
		];

		const err = findErrors(checkItem, payload);
		const result = checkItem.every((b) => b) && !Object.keys(err).length;
		
		setName(payload.name.value);

		setErrors(err);
		setBtnStatus(result);
		setStatus3(result);
	}
		
	// Step 4: Email, Password
	const checkStep4 = () => {
		const payload = {
			email: emailRef.current,
			password: passwordRef.current,
			password_confirmation: passwordConfirmationRef.current,
		};

		const checkItem = [
			validByReg(payload.email.value, regex.email),
			validByReg(payload.password.value, regex.password),
			pwdConfirmation(payload.password, payload.password_confirmation),
		];

		const err = findErrors(checkItem, payload, 2);
		const result = checkItem.every((b) => b) && !Object.keys(err).length;

		setEmail(payload.email.value);
		setPwd(payload.password.value);
		setPwdConfirm(payload.password_confirmation.value);

		setErrors(err);
		setBtnStatus(result);
		setStatus4(result);
		setSave(result);
	};

	if (timer === 0 && errStatus) return (<Navigate to='/' />);

	return (
		<form className="px-3 pb-3 w-100 h-100 d-flex flex-column justify-content-between position-relative" onSubmit={onSubmit} autoComplete="off">
			<div className='form-signup-row mx-auto'>

				{errStatus && <ServerError timer={throttle ? `${timer}s ` : ''} msg={errStatus.msg} />}

				{!errStatus && <div className="form-stepof">Step {count} of {STEPS}</div>}

				{(count === 1 && !errStatus) && <Profession fn={checkStep1} role={role} />}

				{(count === 2 && !errStatus) && <Language fn={checkStep2} check={captcha} />}

				{(count === 3 || count === 4 && !errStatus) && 
				<fieldset>
					<div className={"control-box" + (count === 3 ? ' mb-4' : ' mb-3')}>
						<strong className="form-headline">Create your account</strong>					
					</div>
					{(count === 3 && !errStatus) &&
					<Input 
						ref={nameRef} 
						onFocus={focusInput} 
						onChange={checkStep3} 
						onBlur={blurInput} 
						style={errors && errors.name} 
						name="name"
						value={name}
						countLetter={countLetter}
						notice={(nameNotice && name.search(/\s\w/ig) < 1)}
						feedback={(errors && errors.name) && errors.name[0]} 
					/>}
					{(count === 3 && !errStatus) &&
					<SelectLayout 
						month={
						<Select 
							name="month"
							onFocus={() => setFocusMonth(true)}
							onBlur={() => setFocusMonth(false)}
							defaultValue={selectMonth}
							onChange={setSelectMonth} 
							options={date.getMonths()} 
							placeholder=''
						/>}
						day={
						<Select 
							name="day"	
							onFocus={() => setFocusDay(true)}
							onBlur={() => setFocusDay(false)}
							defaultValue={selectDay}
							onChange={setSelectDay} 
							options={date.getDays()} 
							placeholder=''
						/>
						}
						year={
						<Select 
							name="year"
							onFocus={() => setFocusYear(true)}
							onBlur={() => setFocusYear(false)}
							defaultValue={selectYear}
							onChange={setSelectYear} 
							options={date.getYears()} 
							placeholder=''
						/>
						}
						focMonth={focusMonth}
						focDay={focusDay}
						focYear={focusYear}
						feedback={(errors && errors.birth) && errors.birth[0]}
					 />}
					{(count === 4 && !errStatus) &&
					<Input 
						ref={emailRef} 
						onFocus={focusInput} 
						onChange={checkStep4} 
						onBlur={blurInput} 
						style={errors && errors.email} 
						type='email' 
						name="email"
						value={email} 
						feedback={(errors && errors.email) && errors.email[0]} 
					/>}
					{(count === 4 && !errStatus) &&
					<Input 
						svg={<Bullseye svg={pwdType ? Visibility : VisibilityOff} 
						onClick={() => setPwdType(!pwdType)} />} 
						ref={passwordRef} 
						onFocus={focusInput} 
						onChange={checkStep4} 
						onBlur={blurInput} 
						style={errors && errors.password} 
						type={!pwdType ? 'password' : 'text'} 
						name="password"
						value={pwd} 
						feedback={(errors && errors.password) && errors.password[0]} 
					/>}
					{(count === 4 && !errStatus) &&
					<Input 
						svg={<Bullseye svg={pwdConfType ? Visibility : VisibilityOff} 
						onClick={() => setPwdConfType(!pwdConfType)} />} 
						ref={passwordConfirmationRef} 
						onFocus={focusInput} 
						onChange={checkStep4} 
						onBlur={blurInput} 
						style={errors && errors.password_confirmation} 
						type={!pwdConfType ? 'password' : 'text'} 
						name="password_confirmation"
						value={pwdConfirm} 
						feedback={(errors && errors.password_confirmation) && errors.password_confirmation[0]} 
					/>}
				</fieldset>}

				{!errStatus && <CreatBtnLayout
					back={
						<LongButton
							onClick={dekCounter}
							style='signup-next btn-primary'
							content='Back'
						/>
					}
					condition={count > 1}
					confirm={
						<LongButton
							onClick={(e) => {
								inkCounter();
								if (count !== STEPS && !save) return
								e.target.type = count === STEPS ? 'submit' : 'button';
							}}
							disabled={btnDisabled}
							style={(count === STEPS ? 'btn-outline-dark ' : 'btn-dark ') + "next-btn signup-next"}
							content={count !== STEPS ? 'Next' : (throttle ? `${timer}s ` : '') + 'Save'}
						/>
					}
				/>}
			</div>
		</form>
	)
}

export default Signup;