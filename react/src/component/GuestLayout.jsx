import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider.jsx";
import Welcome from "../views/Welcome.jsx";

const GuestLayout = () => {
	const { token } = useStateContext();

	if (token) return <Navigate to="/" />

	return (
		<section>
			<Welcome />
			<div className="form-middle animated fadeInDown">
				<div className="form">
					<Link to='/' className="btn-close" aria-label="Close" title="Close"></Link>
					<Outlet />
				</div>
			</div>
		</section>
	)
}

export default GuestLayout;