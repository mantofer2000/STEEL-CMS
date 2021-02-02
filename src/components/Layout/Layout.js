import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';

const layout = (props) => (
    <Auxiliary>
        <p>Navbar</p>
        <p>Side Drawer</p>
        <main>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;