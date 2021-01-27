import React from 'react'
import { NavLink } from 'react-router-dom';
import { list, listItem, active, link} from '../Header/Header.module.css';


const Header = () => {
   
    
    return (
        <div>
            <ul className={list}>
                
               <li className={listItem}>
                    <NavLink
                        to={{
                        pathname: "/",
                    }} exact className={link} activeClassName={active}>
                        Home
                    </NavLink>
                </li>
                <li className={listItem}>
                    
                    <NavLink to={{
                        pathname: '/movies',
                    }} className={link} activeClassName={active}>
                        Movies
                    </NavLink>
                </li>
                
           </ul>
        </div>
    );
}

export default Header;
