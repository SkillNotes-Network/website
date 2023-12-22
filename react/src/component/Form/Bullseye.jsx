const Bullseye = ({ onClick, svg }) => {
	return (
		<span className="bullseye" onClick={onClick}>
			{svg}
		</span>
	);
}

export default Bullseye;