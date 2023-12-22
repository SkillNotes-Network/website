const select = ({ onFocus, onChange, onKeyDown, onClick, onBlur, getOptions, value, name, open, optClick  }) => {
	const DOM = {};
	if (name === 'month') {
		getOptions.forEach((o) => {
			if (o.value === value) {
				DOM.value = o.title;
			};
		});
	}
	return (
		<>
			<input 
				onFocus={onFocus}
				onClick={onClick}
				onChange={onChange}
				onKeyDown={onKeyDown}
				onBlur={onBlur}  
				name={name}
				title={name[0].toUpperCase() + name.substring(1)} 
				value={name === 'month' ? DOM.value : value}
				data-select={value}
				className="form-select bday-form"
				readOnly
			/>
				{ 
					<datalist 
						id={name} 
						className={open ? 'd-block' : 'd-none'} 
						role='listbox' 
					>
						{getOptions.map((opt) => (
							<option
								className={value === `${opt.value}`.padStart(2, '0') ? 'curr-ov' : ''}
								key={opt.value}
								value={`${opt.value}`.padStart(2, '0')}
								title={opt.title ?? opt.value}
								onClick={optClick}
							>
								{opt.title ?? opt.value}
							</option>
						))}
						</datalist>
					}
			<label className="form-select-label">
				{name[0].toUpperCase() + name.substring(1)}
			</label>
		</>
	);
}

const style = {
	opt: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)', 
		color: 'white',
	}
}

export default select;