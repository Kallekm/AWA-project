import React, { Component } from 'react'
import './Header.css'


class Header extends Component{
    render(){
        return(
            <div className="HeaderItems">
                <h1 className="navbar-logo">Slurps<i className="fab fa-react"></i></h1>
                <button className="button">Sign in</button>
                <button className="button2">Log in</button>
                <input className="searchBar" type="text" placeholder="Search.."></input>
                
                
                
            </div>
        )
    }
}
export default Header