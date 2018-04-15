import React, { Component } from 'react';
import headerCss from "../../../css/mainLayout/header/header.css";
import Logo from "../../../images/logo.png";

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-grey">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} className="logo-image" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            <a className="nav-item nav-link" href="#">
                                Home
            </a>
                            <a className="nav-item nav-link" href="#">What</a>
                            <a className="nav-item nav-link" href="#">Who</a>
                        </div>
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="">Login</a>
                            <a className="nav-item nav-link" href="">Registrazione</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;