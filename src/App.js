import "./App.css";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/aboutUs" exact element={<AboutUs />}></Route>
        <Route path="/contactUs" exact element={<ContactUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
