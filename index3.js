import React, { useState, useCallback } from 'react'; // import default export and name it as react and also import named expot useState
import ReactDOM from 'react-dom';


const radius  = 50;
const height = 500;
const width = 500;
const initialMousePosition = {x: width/2, y: height / 2};

const App = () => {
    const [mousePositon, setMousePosition] = useState(initialMousePosition);
    const handleMouseMove = useCallback((event) => {
        setMousePosition({ x: event.clientX, y: event.clientY});
    }, [setMousePosition]);
    return (
        <svg height={height} width={width} onMouseMove={handleMouseMove}>
            <circle cx={mousePositon.x} cy={mousePositon.y} r={radius} fill="yellow" stroke="black" strokeWidth={10} />
        </svg>
    );
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);