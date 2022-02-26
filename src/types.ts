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
  lowPolyModel: ReactNode;
  highPolyModel: ReactNode;
  setChild: (child: ReactNode)=> void;

}

export interface INavPanelItem {
  coordinates: ICoordinates;
  title: String;
}


