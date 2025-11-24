import React from "react"
import rest from '../assets/images/restaurant.jpg'
function Header(props){
    return(
        <header>
            <h1>{props.name}</h1>
            <h2>{props.state}</h2>
            <img className="entrance" src={rest} alt="restaurant entrance"/>
        </header>
    )
}
export default Header