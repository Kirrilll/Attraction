import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from "react";
import { Euler, MathUtils } from "three";
import { useThree } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { useGesture } from "@use-gesture/react";

//Код взят из PresentationControls
const SelfControls = ({
  rotation = [0, 0, 0],
  zoom = 1,
  polar = [0, Math.PI / 2],
  azimuth = [-Infinity, Infinity],
  snap = true,
  global,
  cursor = true,
  children,
  speed = 1,
}) => {


  const setRotation = (x, y) => {
    api.start({
      ...spring,
      rotation: [y, x, 0],
    });
  }

  const config = {
    mass: 1,
    tension: 170,
    friction: 26,
  };

  const { size, gl } = useThree();

  const rPolar = React.useMemo(
    () => [rotation[0] + polar[0], rotation[0] + polar[1]],
    [rotation[0], polar[0], polar[1]]
  );

  const rAzimuth = React.useMemo(
    () => [rotation[1] + azimuth[0], rotation[1] + azimuth[1]],
    [rotation[1], azimuth[0], azimuth[1]]
  );

  const rInitial = React.useMemo(
    () => [
      MathUtils.clamp(rotation[0], ...rPolar),
      MathUtils.clamp(rotation[1], ...rAzimuth),
      rotation[2],
    ],
    [rotation[0], rotation[1], rotation[2], rPolar, rAzimuth]
  );
  const [spring, api] = useSpring(() => ({
    scale: 1,
    rotation: rInitial,
    config,
  }));

  React.useEffect(
    () =>
      void api.start({
        scale: 1,
        rotation: rInitial,
        config,
      }),
    [rInitial]
  );
  const bind = useGesture(
    {
      onHover: ({ last }) => {
        if (!global) gl.domElement.style.cursor = last ? "auto" : "grab";
      },

      onDrag: ({
        down,
        delta: [x, y],
        memo: [oldY, oldX] = spring.rotation.animation.to || rInitial,
      }) => {
        gl.domElement.style.cursor = down ? "grabbing" : "grab";

        x = MathUtils.clamp(
          oldX + (x / size.width) * Math.PI * speed,
          ...rAzimuth
        );

        y = MathUtils.clamp(
          oldY + (y / size.height) * Math.PI * speed,
          ...rPolar
        );

        // api.start({
        //   ...spring,
        //   rotation: [y, x, 0],
        // });
        setRotation(x, y)

        return [y, x];
      },
    },
    {
      target: global ? gl.domElement : undefined,
    }
  );

  return /*#__PURE__*/React.createElement(a.group, _extends({}, bind == null ? void 0 : bind(), spring), children);

};

export default SelfControls;