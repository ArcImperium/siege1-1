import React from "react";
import Cards from "./Cards.js";
import {items} from "./Cards.js"

function Header1() {
    return(
        <header>
            <h1>Choose the Best One:</h1>
            <Cards items ={items} />
            <hr></hr>
        </header>
    );
}

export default Header1;