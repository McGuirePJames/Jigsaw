import React from 'react';
import ReactDOM from 'react-dom';
import { ResizeBox } from './components';

window.onload = () => {
    ReactDOM.render(
        <ResizeBox>Hello World</ResizeBox>,
        document.getElementById('mount')
    );
}

