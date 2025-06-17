import { createRoot } from "react-dom/client";
import * as bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
