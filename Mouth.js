import React from "react";
import {arc} from 'd3';

export const Mouth = ({mouthRadius, mouthWidth}) => {
    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(2 * Math.PI / 4)
        .endAngle(2 * Math.PI / 4 * 3);
    return <path d={mouthArc()} />
};

