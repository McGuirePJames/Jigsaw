import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components';

window.onload = () => {
    ReactDOM.render(
        <Button>Hello World</Button>,
        document.getElementById('mount')
    );
}

