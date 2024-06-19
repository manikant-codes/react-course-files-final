import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReduxDemo from "./components/ReduxDemo";
import Layout from "./layouts/Layout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ReduxDemo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
