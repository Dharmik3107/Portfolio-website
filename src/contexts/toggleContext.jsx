import { createContext, useState } from "react";

export const ToggleContext = createContext({
	isToggled: null,
	setToggled: () => null,
});

export const ToggleContextProvider = ({ children }) => {
	const [isToggled, setToggled] = useState(false);
	const value = { isToggled, setToggled };
	return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>;
};
