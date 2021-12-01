import React from 'react';
import ReactDOM from 'react-dom';
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';

const height = 600;
const width = 600;
const centreX = width/2;
const centreY = height/2;
const strokeWidth = 10;
const eyeOffsetX = 100;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthWidth = 20;
const mouthRadius = 180;

const App = () => (
    <svg height={height} width={width}>
        <g transform={`translate(${centreX},${centreY})`}>
            <BackgroundCircle radius={(width - strokeWidth) / 2} strokeWidth={strokeWidth} />
            <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius} />
            <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
        </g>
    </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);