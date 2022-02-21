import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from "react";
import { Euler, MathUtils } from "three";
import { useThree } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { useGesture } from "@use-gesture/react";
import {  ISpring } from "../../types";
import { maxAzimuth, maxPolar, minAimuth, minPolar } from "../../constans";


interface ISelfControlsProp{
  rotation?: {x:number, y:number, z:number},
  children?: React.ReactNode,
  global?: boolean, 
  spring: ISpring,
  setRotation: (x: number, y:number) => void,
  speed?: number
}

interface IMinMax{
  min: number,
  max: number
}

const SelfControls: React.FC<ISelfControlsProp> = ({
  speed =1,
  rotation = {x:0, y: 0, z: 0},
  global = false,
  setRotation,
  spring,
  children
}) => {
  const { size, gl } = useThree();


  const rPolar: IMinMax = {min: rotation.x + minPolar, max: rotation.x + maxPolar};

  const rAzimuth: IMinMax = {min: rotation.y + minAimuth, max: rotation.y + maxAzimuth};

  const rInitial = [
    MathUtils.clamp(rotation.x, rPolar.min, rPolar.max),
    MathUtils.clamp(rotation.y, rAzimuth.min, rAzimuth.max),
    rotation.z,
  ];

  React.useEffect(() => {
    setRotation(rInitial[0], rInitial[1]);
  }, []);
  const bind = useGesture(
    {
      onHover: ({ last }) => {
        if (!global) gl.domElement.style.cursor = last ? "auto" : "grab";
      },

      onDrag: ({
        down,
        delta: [x, y],
        memo: [oldY, oldX] = spring.rotation.animation.to,
      }) => {
        gl.domElement.style.cursor = down ? "grabbing" : "grab";

        x = MathUtils.clamp(
          oldX + (x / size.width) * Math.PI * speed,
          rPolar.min,
          rPolar.max
        );

        y = MathUtils.clamp(
          oldY + (y / size.height) * Math.PI * speed,
          rAzimuth.min,
          rAzimuth.max
        );
        setRotation(x, y);

        return [y, x];
      },
    },
    {
      target: global ? gl.domElement : undefined,
    }
  );

  return /*#__PURE__*/ React.createElement(
    a.group,
    _extends({}, bind == null ? void 0 : bind(), spring),
    children
  );
};

export default SelfControls;
