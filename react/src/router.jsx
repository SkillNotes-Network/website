import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup";
import Feed from "./views/Feed.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./component/DefaultLayout.jsx";
import GuestLayout from "./component/GuestLayout.jsx";
import Network from "./views/Network.jsx";
import Messages from "./views/Messages.jsx";
import Notifications from "./views/Notifications.jsx";
import Profile from "./views/Profile.jsx";
import Settings from "./views/Settings.jsx";
import Language from "./views/Language.jsx";
import Posts from "./views/Posts.jsx";
import PasswordReset from "./views/PasswordReset.jsx";
import Welcome from "./views/Welcome.jsx";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Welcome />
	},
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '/',
				element: <Navigate to="/feed/" />
			},
			{
				path: '/feed/',
				element: <Feed />
			},
			{
				path: '/network',
				element: <Network />
			},
			{
				path: '/messages/',
				element: <Messages />
			},
			{
				path: '/notifications/',
				element: <Notifications />
			},
			{
				path: '/account/profile/',
				element: <Profile />
			},
			{
				path: '/account/settings/',
				element: <Settings />
			},
			{
				path: '/account/language/',
				element: <Language />
			},
			{
				path: '/account/posts/',
				element: <Posts />
			},
		]
	},
	{
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/signup',
				element: <Signup />
			},
			{
				path: '/password_reset',
				element: <PasswordReset />
			},
		]
	},
	{
		path: '*',
		element: <NotFound />
	},
]);

export default router;