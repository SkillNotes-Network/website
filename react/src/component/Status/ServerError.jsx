import Warning from "../Icons/Warning";

const ServerError = ({ timer, msg }) => {
	return (
		<section className="server-err" role="alert">
			<div className="err-msg mb-4">
				{Warning}
				<div className="mb-3">
					{msg}
				</div>
				<div>
					{`Redirection in... ${timer} seconds.`}
				</div>
			</div>
		</section>
	);
}

export default ServerError;