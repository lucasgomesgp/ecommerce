import Lottie from "lottie-react";
import React from "react";
import animationData from '../../public/animations/animation.json';

export default function BlockedAnimation() {
    return (
        <Lottie
            animationData={animationData}
            autoplay
            loop
            style={{ width: 400, height: 400 }}
        />
    );
}