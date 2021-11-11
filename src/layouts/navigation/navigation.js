// @vendors
import { NavLink, useLocation } from 'react-router-dom'

// @styles
import './styles.scss'

export default function Navigation() {
    const { pathname } = useLocation()
    console.log({ pathname })
    return (
        <div className='container-sidebar'>
            <div className='container-sidebar--logo'>
                REACT JAVA
            </div>
            <ul className='container-sidebar--navigation'>
                <NavLink exact to='/' className='container-sidebar--navigation-item'>
                    Inicio
                </NavLink>
                <NavLink exact to='/create-post' className='container-sidebar--navigation-item'>
                    Crear Post
                </NavLink>
                <NavLink exact to='/create-account' className='container-sidebar--navigation-item'>
                    Crear Cuenta
                </NavLink>
            </ul>
        </div>
    )
}