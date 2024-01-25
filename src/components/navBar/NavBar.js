import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import './navBar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/icon-search.png'
import menu from '../../assets/menu.png'



const NavBar = () => {
  const [isMenuOpen, setIsMenuOPen] = useState(false)
  const toggleMenu = () =>{
    setIsMenuOPen(!isMenuOpen)
  }
  return (
    <nav id='nav'>
        <img src={logo} alt='logo' className='logo' />
        <div className='nav-links'>
        <NavLink to='/' style={({isActive}) => ({color:isActive ? 'yellow' : 'none'})} className='nav-link'>Home</NavLink>
        <NavLink to='/about' style={({isActive}) => ({color:isActive ? 'yellow' : 'none'})} className='nav-link'>About</NavLink>
        <NavLink to='/contact' style={({isActive}) => ({color:isActive ? 'yellow' : 'none'})} className='nav-link'>Contact</NavLink>
        </div>
        <div className='searchBar'>
        <input
           type='search'
           name='search'
           placeholder='search...'
           className='searchInput'
          />
          <img src={searchIcon} alt='search' className='searchIcon' />
          </div>
        <div className='mobNav'>
          <img src={menu} alt='logo' className='mobMenuImg' onClick={toggleMenu}/>
          {isMenuOpen && (
            <div className='mobNav-links'>
            <NavLink to = '/'style={({isActive}) => ({color:isActive ? 'yellow' : 'none'})} className='mobNav-link'>Home</NavLink>
            <NavLink to = '/about' style={({isActive}) => ({color:isActive ? 'yellow' : 'none'})} className='mobNav-link'>About</NavLink>
            <NavLink to = '/contact' style={({isActive}) => ({color:isActive ? 'yellow' : 'none'})}  className='mobNav-link'>Contact</NavLink>
            </div>

          )}
          </div>
      </nav>
  )
};

export default NavBar;