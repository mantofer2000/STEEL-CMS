import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';
import classes from './Navbar.css';
import Drowpdown from '../../UI/Dropdown/Dropdown';

const navbar = (props) => (
  <header className={classes.NavBar}>
    <h1 className={classes.NavBarTitle}>STEEL</h1>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default navbar;