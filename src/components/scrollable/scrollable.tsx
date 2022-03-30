import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDrag, useGesture } from "@use-gesture/react";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/three";

const Scrollable: React.FC = (props) => {

    const outerDivRef = useRef<HTMLDivElement>(null);
    const innerDivRef = useRef<HTMLDivElement>(null);

    const bind =  useGesture({

        onDrag: ( {offset} ) => {
            outerDivRef.current?.scrollTo(0, -offset[1]);
            document.body.style.cursor = 'grabbing'
        },
        onDragEnd: () => {
            document.body.style.cursor = 'grab'
        },
        onHover: () => {
            document.body.style.cursor = 'grab'
        }
        
    })
  

    return (
        <div {...bind()} style={{ overflow: 'hidden', transition: 'all 1s ease'}} ref={outerDivRef}>
            <div ref={innerDivRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Scrollable;