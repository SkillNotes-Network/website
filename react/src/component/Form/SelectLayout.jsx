const SelectLayout = ({ month, day, year, feedback }) => {
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
						{month}
					</div>
				</div>
				<div className="col-3">
					<div className="control-box">
						{day}
					</div>
				</div>
				<div className="col-4">
					<div className="control-box">
						{year}
					</div>
				</div>
			</div>
			{feedback && <div className="invalid-feedback d-block">{feedback}</div>}
		</>
	);
}

export default SelectLayout;