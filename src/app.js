import React from 'react';
import ReactDOM from 'react-dom';
// CONTAINER COMPONENT:
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render(
    <IndecisionApp />,
    document.getElementById('app')
);