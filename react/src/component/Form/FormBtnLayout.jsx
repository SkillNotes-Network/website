const FormBtnLayout = ({ back, condition, confirm }) => {
	return (
		<fieldset className="fixed-bottom">
			{condition &&
			<div className="form-signup-row mx-auto p-4 px-md-0 pb-0">
				{back}
			</div>}
			<div className="form-signup-row mx-auto p-4 px-md-0 pb-2 pt-0">
				{confirm}
			</div>
		</fieldset>
	);
}

export default FormBtnLayout;