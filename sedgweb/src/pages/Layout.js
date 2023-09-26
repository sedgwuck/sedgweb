import React from "react";
import { Link, Outlet } from "react-router-dom";
import './nav.css'

function Layout() {
    return (
        <>
            <nav className="navigation">
                <ul className="container">
                    <li>
                        <Link to="/" className="link-style">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="link-style">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link-style">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link-style">About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout