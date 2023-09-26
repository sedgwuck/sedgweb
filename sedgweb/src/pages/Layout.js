import React from "react";
import { Link, Outlet } from "react-router-dom";
import './nav.css'

function Layout() {
    return (
        <>
            <nav className="navigation">
                <ul className="container">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout