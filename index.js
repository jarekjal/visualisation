import React from 'react';
import ReactDOM from 'react-dom';
import { Face } from './Face';

const height = 600;
const width = 600;

const App = () => (
    <Face 
        height={height}
        width={width}
        centreX = {width/2}
        centreY = {height/2}
        strokeWidth = {10}
        eyeOffsetX = {100}
        eyeOffsetY = {100}
        eyeRadius = {50}
        mouthWidth = {20}
        mouthRadius = {180} 
    />
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);