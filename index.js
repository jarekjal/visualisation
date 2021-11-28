import React from 'react';
import ReactDOM from 'react-dom';

const height = 600;
const width = 600;
const centreX = width/2;
const centreY = height/2;
const strokeWidth = 10;
const eyeOffset = 100;
const eyeRadius = 50;

const App = () => (
    <svg height={height} width={width}>
        <circle cx={centreX} cy={centreY} r={(width - strokeWidth)/2} stroke="black" stroke-width={strokeWidth} fill="yellow" />
        <circle cx={centreX - eyeOffset} cy={centreY - eyeOffset} r={eyeRadius} fill="black" />
        <circle cx={centreX + eyeOffset} cy={centreY - eyeOffset} r={eyeRadius} fill="black" />
    </svg>
); 

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);