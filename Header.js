import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to = "/home">Home</Link>
                </li>
                <li>
                    <Link to = "/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to = "/about">About Us</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}
export default Header;