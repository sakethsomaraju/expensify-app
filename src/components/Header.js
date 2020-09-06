import React from 'react' 
import {NavLink} from 'react-router-dom'

const Header = ()=>{
    return (
        <header>
            <h1>expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>home </NavLink>
            <NavLink to="/create" activeClassName="is-active">create expense </NavLink>
            <NavLink to="/help" activeClassName="is-active">help </NavLink>

        </header>
    )
}

export default Header