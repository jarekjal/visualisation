import React from 'react';
import ReactDOM from 'react-dom';
import { Face } from './Face';
import { range } from 'd3';

const height = 200;
const width = 200;
const array = range(16);

const App = () => (
    array.map( () => (<Face 
        height={height}
        width={width}
        centreX = {width/2}
        centreY = {height/2}
        strokeWidth = {height/60}
        eyeOffsetX = {height/6 + Math.random() * 10}
        eyeOffsetY = {width/6 + Math.random() * 10}
        eyeRadius = {height/10 + Math.random() * 10}
        mouthWidth = {height/30 + Math.random() * 10}
        mouthRadius = {height/10 *3 + Math.random() * 15} 
    />))
    
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);