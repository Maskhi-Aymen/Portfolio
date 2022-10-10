import React from 'react'
import './logo.scss'
import 'animate.css';
import {logo} from '../../assets/images';
const Logo = () => {

  

  return (
    <div className="logo-container switch__stroke-color" >
     <img src={logo} class="animate__animated animate__bounce animate__repeat-2" className="home-logo solid-logo"/>
    </div>
  )
}

export default Logo