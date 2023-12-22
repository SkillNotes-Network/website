import { Link } from "react-router-dom";

const Button = ({title, link, style}) => {
	return (
		<>
			<Link title={title} to={link} className={'w-100 btn ' + style}>{title}</Link>
		</>
	);
}

export default Button;