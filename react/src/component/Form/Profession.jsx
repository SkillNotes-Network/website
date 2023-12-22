const Profession = ({ fn, role }) => {
	return (
		<fieldset>
			<div className="control-box mb-4">	
				<strong className="form-headline">What's your profession?</strong>					
			</div>
			<div className="control-box mb-3 p-3">
				<div className="form-check form-switch">
					<input className="form-check-input" type="radio" name="role" role="switch" value="dev" defaultChecked={role === 'dev'} onChange={fn} autoFocus />
					<label className="form-check-label h5 ps-4 lh-base">Developer</label>
				</div>
			</div>
			<div className="control-box mb-3 p-3">
				<div className="form-check form-switch">
					<input className="form-check-input" type="radio" name="role" role="switch" value="hrm" defaultChecked={role === 'hrm'} onChange={fn} />
					<label className="form-check-label h5 ps-4 lh-base">Human Ressource Manager</label>
				</div>
			</div>
			<div className="control-box mb-3 p-3">
				<div className="form-check form-switch">
					<input className="form-check-input" type="radio" name="role" role="switch" value="hh" defaultChecked={role === 'hh'} onChange={fn} />
					<label className="form-check-label h5 ps-4 lh-base">Headhunter</label>
				</div>
			</div>
		</fieldset>
	);
}

export default Profession;