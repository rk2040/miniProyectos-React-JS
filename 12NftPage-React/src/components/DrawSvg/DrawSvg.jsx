import React from "react";
import { styled, keyframes } from "styled-components";
import Vector from "../Icons/Vector";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const DrawSvg = () => {
    const ref = useRef(null);
    const ballRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger); 

    useLayoutEffect(()=>{
        let element = ref.current;
        let svg = document.getElementsByClassName('svg-path')[0];
        const length = svg.getTotalLength();
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                onUpdate: (self)=>{
                    const draw = length * self.progress;
                },
                onToggle: (self)=>{
                    if(self.isActive){
                        
                    }
                }
            }
        })
    },[])

    return (
        <>
            <Ball />
            <VectorContainer>
                <Vector />
            </VectorContainer>
        </>
    );
};

export default DrawSvg;

const Bounce = keyframes`
    from{
        transform: translateX(-50%) scale(0.5);
    }
    to {
        transform: translateX(-50%) scale(1);
    }
`;

const Ball = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${(props) => props.theme.text};
    border-radius: 50%;

    animation: ${Bounce} 500ms linear infinite alternate;

    @media (max-width: 48em) {
        left: 1rem;
    }
`;

const VectorContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    overflow: hidden;

    svg {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 48em) {
        left: 1rem;
    }
`;
