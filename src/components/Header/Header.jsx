import React from "react";
import './Header.scss'
import logo from './logo.svg';
import search from './search.svg';
import profile from './profile.svg';
import cart from './cart.svg';
import arrowDown from './arrowDown.svg';


const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="locationBar"> <p>Você está em: Sua Localização</p> <a href="">Alterar</a> </div>
        
        <div className="container">

          <div className="left">
          <img src={logo} alt="LogoBebecê" className="logo" />
       
          <button>
            <li className="dropdown">
            <span className="dropbtn">Produtos <img src={arrowDown} alt="LogoBebecê" className="logo" /></span>           
            <ul className="dropdown-content">
              <li><a href="/sapatos">Sapatos</a></li>
              <li><a href="/escarpins">Scarpins</a></li>
              <li><a href="/sandalias">Sandálias</a></li>
              <li><a href="/botas">Botas</a></li>
            </ul>
            </li>
          </button>

          <button>
            <a class= "Lançamentos" href="">Lançamentos</a>
          </button>

          <button>
            <a class= "Outlet" href="">Outlet</a>
          </button>

          </div>
          <div className="right">
            <img src={search} alt="Search Icon" className="search" />
            <img src={profile} alt="Profile Icon" className="profile" />
            <img src={cart} alt="Cart Icon" className="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;