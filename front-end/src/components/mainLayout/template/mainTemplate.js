import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';


class MainTemplate extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Header />
                 {this.props.children}
                 <Footer />
            </div>
        )
    }
}

export default MainTemplate;