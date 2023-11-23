import React,{useRef,useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {
    //data
    const navigation = [
        {
            name:"Home",
            href:"/"
        },
        {
            name:"Faculty",
            href:"/faculty"
        },
        {
            name:"Events",
            href:"/events"
        },
        {
            name:"About",
            href:"/about"
        },
        {
            name:"Research Groups",
            href:"/research-groups"
        },
        {
            name:"Programmers",
            href:"/programmers"
        },
        {
            name:"Technical Team",
            href:"/tech-team"
        },
        {
            name:"Tips",
            href:"/tips"
        },
        {
            name:"Social",
            href:"/social"
        },
        {
            name:"Contact",
            href:"/contact"
        },
        ]

        
  const active = {
    color:"gold"
  }
    return (
        <div className="nav-wrapper">
        <div className="inner-nav-wrapper">
            <div className="logo">
                <img src="https://dcs.ug.edu.gh/img/comScience_logo.png" className="logo-img" alt="logo"/>
            </div>


          <div className="nav" >
            {
                navigation.map(nav => {
                    return (
                            <NavLink key={nav.name}  style={({isActive}) => isActive ? active : null} className="nav-links" to={nav.href}>{nav.name}</NavLink>
                    )
                })
            }
            </div>
          <div className="nav-responsive">
            {
                navigation.map(nav => {
                    return (
                            <NavLink key={nav.name}  style={({isActive}) => isActive ? active : null}  className="nav-links" to={nav.href}>{nav.name}</NavLink>
                    )
                })
            }
            </div>

        </div>
        </div>
    )
}

export default Navbar