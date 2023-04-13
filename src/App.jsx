import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Landing from "./components/Landing/Landing";
import Personal from "./routes/Personal/Personal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route index element={<Personal />} />
      </Route>
    </Routes>
  );
}

export default App;
