import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToggleContextProvider } from "./contexts/toggleContext";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ToggleContextProvider>
				<App />
			</ToggleContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
