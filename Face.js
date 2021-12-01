import React from "react";
import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';
import { FaceContainer } from './FaceContainer';

export const Face = ({height, width, centreX, centreY, radius, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthRadius, mouthWidth}) => (
    <FaceContainer height={height} width={width} centreX={centreX} centreY={centreY}>
        <BackgroundCircle radius={(width - strokeWidth) / 2} strokeWidth={strokeWidth} />
        <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius} />
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
);