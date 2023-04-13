import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import "./App.scss";
import Landing from "./components/Landing/Landing";
import Personal from "./routes/Personal/Personal";
import Professional from "./routes/Professional/Professional";
import { ToggleContext } from "./contexts/toggleContext";

function App() {
	const { isToggled } = useContext(ToggleContext);
	return (
		<Routes>
			<Route path="/" element={<Landing />}>
				<Route index element={isToggled ? <Professional /> : <Personal />} />
			</Route>
		</Routes>
	);
}

export default App;
