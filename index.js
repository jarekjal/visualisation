import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

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

const mouthArc = d3.arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(2 * Math.PI / 4)
    .endAngle(2 * Math.PI / 4 * 3);


class BackgroundCircle extends React.Component {
    render() {
        const { radius, strokeWidth } = this.props;
        return (
            <circle
                r={radius}
                stroke="black"
                stroke-width={strokeWidth}
                fill="yellow"
            />
        );
    }
}

const App = () => (
    <svg height={height} width={width}>
        <g transform={`translate(${centreX},${centreY})`}>
            <BackgroundCircle radius={(width - strokeWidth) / 2} strokeWidth={strokeWidth} />
            <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
            <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black" />
            <path d={mouthArc()} />
        </g>
    </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);