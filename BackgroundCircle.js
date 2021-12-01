import React from "react";

export const BackgroundCircle = ({radius, strokeWidth}) => (
    <circle
        r={radius}
        stroke="black"
        stroke-width={strokeWidth}
        fill="yellow"
    />
);
