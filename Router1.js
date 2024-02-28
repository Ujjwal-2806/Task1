import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";
import Header from './component/Header';
import "./App.css";

function Router1() {
    return(
        <Router>
            <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            
        </Router>
    );
}

export default Router1;