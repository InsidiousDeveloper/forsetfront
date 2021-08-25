import React, {useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {AuthContext} from "../context/authcontext";

const logout = <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="sign-out-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor"d="M160 217.1c0-8.8 7.2-16 16-16h144v-93.9c0-7.1 8.6-10.7 13.6-5.7l141.6 143.1c6.3 6.3 6.3 16.4 0 22.7L333.6 410.4c-5 5-13.6 1.5-13.6-5.7v-93.9H176c-8.8 0-16-7.2-16-16v-77.7m-32 0v77.7c0 26.5 21.5 48 48 48h112v61.9c0 35.5 43 53.5 68.2 28.3l141.7-143c18.8-18.8 18.8-49.2 0-68L356.2 78.9c-25.1-25.1-68.2-7.3-68.2 28.3v61.9H176c-26.5 0-48 21.6-48 48zM0 112v288c0 26.5 21.5 48 48 48h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h132c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12H48C21.5 64 0 85.5 0 112z"></path></svg>

const Navbar = () => {

    const auth = useContext(AuthContext)
    const history = useHistory()

    const toggleMenu = () => {
        const menu = document.querySelector('.menus')
        const burger = document.querySelector('.burger-wrapper')
        menu.classList.toggle("open")
        burger.classList.toggle("burger-open")
    }

    const logoutFn = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="content nav-wrapper">
                <div className="logo">
                    Forset
                </div>
                <div className="menus">
                    <li><NavLink to="/carslist" activeClassName="current">Cars</NavLink></li>
                    <li><NavLink to="/clientslist" activeClassName="current"> All Clients</NavLink></li>
                    <li><NavLink to="/orders" activeClassName="current">Orders</NavLink></li>
                    <li><NavLink to="/analytics" activeClassName="current">Analytics</NavLink></li>
                    <li><NavLink to="/authorization" activeClassName="current">Clients</NavLink></li>
                    <li><button onClick={logoutFn}>{logout}</button></li>
                </div>
                <div className="burger-wrapper" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default React.memo(Navbar)