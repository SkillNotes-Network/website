import Warning from "../Icons/Warning";
import Confirmed from "../Icons/Confirmed";

const ResponseStatus = ({ timer, msg, icon }) => {
	return (
		<section className="server-status" role="alert">
			<div className="status-msg mb-4">
				{icon ? Confirmed : Warning}
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

export default ResponseStatus;