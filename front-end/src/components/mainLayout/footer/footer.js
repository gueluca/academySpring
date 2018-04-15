import React, { Component } from 'react';
import footerCss from "../../../css/mainLayout/footer/footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col mr-auto">
                        <p>ThinkOpen Srl</p>
                        <p>Italia, Milano, MI</p>
                        <p>Front End Developer</p>
                        <p>info@gmail.com</p>
                    </div>
                    <div className="col">
                        <div className="pull-right">
                            <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook fa-5x" ></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter fa-5x"></i>
                            </a>
                            <a href="https://it.linkedin.com/" target="_blank">
                                <i className="fab fa-linkedin fa-5x"></i>
                            </a>
                            <a href="https://plus.google.com/discover" target="_blank">
                                <i className="fab fa-google-plus fa-5x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Footer;

