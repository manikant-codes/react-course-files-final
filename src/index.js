import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Demo from "./pages/Demo";
import { Provider } from "react-redux";
import myStore from "./redux/store";
import NewComp from "./pages/NewComp";
// import Demo from "./pages/Demo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <NewComp />
  </Provider>
);
