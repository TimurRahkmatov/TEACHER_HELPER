import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App.tsx";
import "./index.css";

// Router
import { BrowserRouter as Router } from "react-router-dom";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// axios
axios.defaults.headers.common["Content-Type"] = "application/json";

// Redux Toolkit
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Provider store={store}>
    <App />
    <ToastContainer theme="colored" />
    </Provider>
  </Router>
);
