import React from "react";

import logo from "../assets/img/logo.png"

function Navbar(){
    
    let year = new Date().getFullYear()

    return(
       <nav className="navbar">
            <h1 className="visually-hidden">Meme Generator</h1>
            <img src={logo} />
            <span className="metadata">{ year } © Juan Manuel Linares</span>
       </nav>
       
    )
}

export default Navbar