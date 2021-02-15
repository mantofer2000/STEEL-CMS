import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="./">Home</NavigationItem>
    <NavigationItem link="./">Contact Us</NavigationItem>
    <NavigationItem link="./">About</NavigationItem>
  </ul>
);

export default navigationItems;