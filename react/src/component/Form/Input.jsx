import { forwardRef } from "react";
import { useHover } from "@uidotdev/usehooks";
import QuestionIcon from "../Icons/Question";

const Input = forwardRef(({ countLetter, notice, svg, name, onFocus, onChange, onBlur, type, value, style, feedback}, ref) => {
	const [hoverRef, hovering] = useHover();
	const defaultTxt = 'Make the most of your professional life';
	const hovTxt = 'setAttributes(firstName, lastName)';

	const spacer = (dTxt, hTxt) => {
		if (dTxt.length !== hTxt.length) {
			return '_'.repeat(dTxt.length - hTxt.length);
		}
		return;
	};
	const title = () => {
		if (name.match(/_/ig) === null) {
			return name[0].toUpperCase() + name.substring(1);
		} else {
			const sep = name.indexOf('_');
			return `${name[0].toUpperCase() + name.substring(1, sep)} ${name.substring(sep + 1)[0].toUpperCase() + name.substring(sep + 2)}`;
		}
	};
	return (
		<div className="control-box">
			{notice && 
				<small className='input-notice animated fadeInLeft'>
					{hovering ? spacer(defaultTxt, hovTxt) + hovTxt : defaultTxt}
					<span ref={hoverRef}>
						<QuestionIcon color='#6F4181' />
					</span>
				</small>
			}
			{svg && svg}
			{countLetter && 
				<span className='letter-counter'>{value === '' ? '0' : value.length} / {'50'}</span>
			}
			<input 
				ref={ref}
				onFocus={onFocus}
				onChange={onChange}
				onBlur={onBlur}
				type={type ?? 'text'}
				name={name}
				autoFocus
				defaultValue={value}
				maxLength={name === 'name' ? '50' : ''}
				className={(style ? 'is-invalid ' : 'mb-3 ') + 'form-control pe-5'}
				/>
			<label className={(value.length > 0 ? (style ? 'is-invalid' : 'foc-blue') + ' in-top ' : '') + 'form-label'}>{title()}</label>
			<div className="invalid-feedback">{feedback}</div>
		</div>
	);
})

export default Input;