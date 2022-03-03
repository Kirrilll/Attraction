import { Color } from "@react-three/fiber";
import { ArrowFunction, FunctionDeclaration } from "typescript";
import { SpringRef, SpringValue } from "@react-spring/core";
import React, { ReactElement, ReactNode } from "react";

export interface ISpring {
  scale: SpringValue<number>;
  rotation: SpringValue<number[]>;
  mass: SpringValue<number>;
  tension: SpringValue<number>;
  friction: SpringValue<any>;
}

export interface ISpringConfig {
  scale: number;
  rotation: number[];
  mass: number;
  tension: number;
  friction: number;
}

export interface ICoordinates {
  latitude: number;
  longitude: number;
}

export interface IAttractionMarkerProps {
  title: string;
  coordinates: ICoordinates;
  lowPolyModelPath: string;
  highPolyModelPath: string;
  setChild: (child: ReactNode)=> void;

}

export interface INavPanelItem {
  coordinates: ICoordinates;
  title: string;
  flagDefaultPath: string;
  flagHoveredPath: string;
}

export interface INavPanelContainer{
  navPanelItems: Array<INavPanelItem>
  setRotation: (x:number, y:number) => void;
}
