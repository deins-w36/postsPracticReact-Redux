import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './header.scss'

const Header = () => {
    const [active, setActive] = useState(false)
    const clazz = active ? 'header__burger-act active' : 'header__burger-act'

    return (
        <header className="header">
            <div className="header__name">Placeholder - Posts</div>
            <div onClick={() => setActive((menu) => !menu)} className="header__burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={clazz}>
                <NavLink end to="/" style={({ isActive }) => ({ textDecoration: isActive ? 'none' : 'none' })}>
                    <div onClick={() => setActive(false)} className="header__burger-act__item">
                        Posts
                    </div>
                </NavLink>
                <NavLink end to="/users" style={({ isActive }) => ({ textDecoration: isActive ? 'none' : 'none' })}>
                    <div onClick={() => setActive(false)} className="header__burger-act__item">
                        Users
                    </div>
                </NavLink>
            </div>
        </header>
    )
}

export default Header
