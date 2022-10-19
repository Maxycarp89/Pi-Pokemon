import React from "react";
import {Link} from "react-router-dom"


export default function LandingPage(){
    return(
        <div>
        <h2>by Maximiliano Costilla </h2>
        <Link to = '/home'>
        <button>Let´s Go!</button>
        </Link>
        </div>
    )
}