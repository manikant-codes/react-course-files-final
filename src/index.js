import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Demo from "./pages/Demo";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  //   <Demo />
  // </Provider>
  <App />
);
