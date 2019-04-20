import React, { Component } from 'react';
import Apple from '../imgs/Apple-logo1.jpg';

class MainPage extends Component {

    render(){
        return(
            <div>
                <Header/>
                <Footer/>

            </div>
        )
    }

}

const Header = () => {
    return(
        <div style={getStyle()}>
            <nav >
                <ul>
                    <li> <a href="#"><img src={Apple} style={{zoom:"5%"}}/></a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>


        </div>
    )

}

const Footer = ( ) => {
    return(

        <h3>Copyrights by Ivy </h3>
    )
}

function getStyle(){
    return {
        background: "#F6F6F6",
        height:"70px",
        width: "100%",

       ul: {

        }

    }
}



export default MainPage;