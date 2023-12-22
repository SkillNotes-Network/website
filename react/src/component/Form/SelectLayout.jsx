const Arrow = ({ color, size }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
			<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" fill={color}/>
		</svg>
	);
}

const SelectLayout = ({ month, day, year, feedback, focMonth, focDay, focYear }) => {
	return (
		<>
			<div className="mb-4 lh-1">
				<div className="mb-2">
					<b>Date of birth</b>	
				</div>
				<span className="text-secondary">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
			</div>
			<div className="row">
				<div className="col-5">
					<div className="control-box">
						<span className="select-arrow">
							{<Arrow 
								size='34' 
								color={focMonth ? '#003cff86' : '#cfcfcf'} 
							/>}
						</span>
						{month}
						<label className={'form-label in-top' + (focMonth ? ' foc-blue' : '')}>Month</label>
					</div>
				</div>
				<div className="col-3">
					<div className="control-box">
						<span className="select-arrow">
							{<Arrow 
								size='34' 
								color={focDay ? '#003cff86' : '#cfcfcf'} 
							/>}
						</span>
						{day}
						<label className={'form-label in-top' + (focDay ? ' foc-blue' : '')}>Day</label>
					</div>
				</div>
				<div className="col-4">
					<div className="control-box">
						<span className="select-arrow">
							{<Arrow 
								size='34' 
								color={focYear ? '#003cff86' : '#cfcfcf'} 
							/>}
						</span>
						{year}
						<label className={'form-label in-top' + (focYear ? ' foc-blue' : '')}>Year</label>
					</div>
				</div>
			</div>
			{feedback && <div className="invalid-feedback d-block">{feedback}</div>}
		</>
	);
}

export default SelectLayout;