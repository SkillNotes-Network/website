import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider.jsx";
import Navbar from "./Navigation/Navbar.jsx";

const DefaultLayout = () => {
	const {user, token} = useStateContext();

	if (!token) return <Navigate to="/" />

	return (
		<>
			<Navbar>
				{ user }
			</Navbar>
			<Outlet />
		</>
	)
}

export default DefaultLayout;