import React, { Component } from 'react';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        {props.branding}
                    </a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header;