import { createContext, useContext, useState } from "react";

const StateContext = createContext({
	user: null,
	token: null,
	setUser: () => {},
	setSessionToken: () => {}
})

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

	const setSessionToken = (token) => {
		setToken(token);
		if (token) {
			localStorage.setItem("ACCESS_TOKEN", token);
		} else {
			localStorage.removeItem("ACCESS_TOKEN");
		}
	}

	return (
		<StateContext.Provider value={{
			user,
			token,
			setUser,
			setSessionToken
		}}>
			{ children }
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext(StateContext);