import React from 'react';
import style from './Header.module.css';
import logo from '../../images/logo.svg';

const Header = (props) => {

  return (
    <header className={style.header}>
      <img src={logo} alt="mesto logo" className={style.logo}></img>
    </header>
  )

}


export default Header;
