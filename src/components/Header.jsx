import React from 'react'
import { NavLink } from 'react-router-dom';
import {headerLogo} from "../assets/images";
import {navLinks} from "../constants/index"
import {hamburger} from "../assets/icons";
export const Header = () => {
  return (
    <header className='padding-x py-8 z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <NavLink to="/">
          <img src={headerLogo} alt="offer" width={130} height={29} />
        </NavLink>

        <ul className='flex justify-center items-center max-lg:hidden gap-16'>
          {
            navLinks.map((links)=>(
              <li key={links.label}>
                <a className='font-montserrat leading-normal text-lg text-slate-gray' href={links.href}>{links.label}</a>
              </li>

            ))
          }
        </ul>
        <div className="hidden max-lg:block">
          <img className='' src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}


