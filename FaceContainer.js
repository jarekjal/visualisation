import React from "react";

export const FaceContainer = ({children, height, width, centreX, centreY}) => (
    <svg height={height} width={width}>
        <g transform={`translate(${centreX},${centreY})`}>
            { children }
        </g>
    </svg>
);