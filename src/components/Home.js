import React from "react";
import { NavLink } from "react-router-dom";

export const Home= (props) => {
    return(
        <div id="home">
            <div className="centered">
                <h2>  {props.hello},Welcome to my React App</h2>
                <NavLink to="/gallery"> Check out the gallery </NavLink>
            </div>
        </div>
    )
}