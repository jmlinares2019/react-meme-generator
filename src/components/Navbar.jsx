import React from "react";

import logo from "../assets/img/logo.png"

function Navbar(){
    return(
       <nav className="navbar">
            <h1 className="visually-hidden">Meme Generator</h1>
            <img src={logo} />
            <span className="metadata">React Course - Project 3</span>
       </nav>
       
    )
}

export default Navbar