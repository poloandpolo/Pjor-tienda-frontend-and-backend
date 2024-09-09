import React from 'react';
import './styles/NavigationBar.scss';

export const NavigationBar = () => {
  return (
    <nav className='navigation-bar'>
      <ul className='navigation-bar__list'>
        <li className='navigation-bar__item'><a  className='navigation-bar__link'>Hombre</a></li>
        <li className='navigation-bar__item'><a  className='navigation-bar__link'>Mujer</a></li>
        <li className='navigation-bar__item'><a  className='navigation-bar__link'>Media</a></li>
        <li className='navigation-bar__item'><a  className='navigation-bar__link'>Crew</a></li>
        <li className='navigation-bar__item'><a  className='navigation-bar__link'>Vision</a></li>
      </ul>
    </nav>
  );
}
