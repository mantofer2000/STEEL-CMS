import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="./">Inicio</NavigationItem>
    <NavigationItem link="./">Portafolio</NavigationItem>
    <NavigationItem link="./">Contacto</NavigationItem>
    <NavigationItem link="./">About</NavigationItem>
  </ul>
);

export default navigationItems;