import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../Navigation/Navbar/Navbar';

const layout = (props) => (
    <Auxiliary>
        <Navbar></Navbar>
        <p>Side Drawer</p>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;