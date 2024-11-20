import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Sources/portfoliologo.jpg';
import {Link} from 'react-scroll';
import contactImg from '../../Sources/cntimg.png';
import Menu from '../../Sources/menu.jpg'


const Navbar = ()=>{
 const[showMenu, setShowMenu] = useState(false); 
    return(
      <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopmenu">
            <Link activeClass ="active" to ="intro" spy={true} offset={-100} duration={500} className="desktopmenuLinkItem" >Home</Link>
            <Link activeClass ="active" to ="skills" spy={true} offset={-50} duration={500} className="desktopmenuLinkItem">About</Link>
            <Link activeClass ="active" to ="works" spy={true} offset={-50} duration={500} className="desktopmenuLinkItem">Work Experience</Link>
            <Link activeClass ="active" to ="project" spy={true} offset={-50} duration={500} className="desktopmenuLinkItem">Projects</Link>

        </div>
        <button className="desktopmenubutton"onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behavior:"smooth"});
        }}>
            <img src={contactImg} alt="" className="desktopmenuimg"/>Contact Me</button>

            <img src={Menu} alt="Menu" className='Menu'onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navmenu" style={ {display: showMenu? 'flex':'none'}}>
            <Link activeClass ="active" to ="intro" spy={true} offset={-100} duration={1000} className="linkItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass ="active" to ="skills" spy={true} offset={-50} duration={1000} className="linkItem" onClick={()=>setShowMenu(false)} >About</Link>
            <Link activeClass ="active" to ="works" spy={true} offset={-50} duration={1000} className="linkItem" onClick={()=>setShowMenu(false)} >Work Experience</Link>
            <Link activeClass ="active" to ="project" spy={true} offset={-50} duration={1000} className="linkItem" onClick={()=>setShowMenu(false)} >Projects</Link>
            <Link activeClass ="active" to ="contactPage" spy={true} offset={-50} duration={1000} className="linkItem" onClick={()=>setShowMenu(false)} >Contact</Link>
        </div>

      </nav>
    )
}

export default Navbar;