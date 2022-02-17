import { Vector3 } from "three";
import { ISpring, ISpringConfig } from "./types";

//Радиус Земли
export const EARTH_RADIUS: number = 2;

//Центр Земли
export const EARTH_CENTER: Vector3 = new Vector3(2, 0, 0);

//Показывает пропорцию достпримечастелности относительно Земли
export const ATTRACTION_RATIO: number = 1 / 1000;

//Верхняя граница поворота по вертикали
export const minPolar: number = -Infinity;

//Нижняя граница поворота по вертикали
export const maxPolar: number = Infinity;

//Нижняя раница повората пов вертикали
export const minAimuth: number = 0;

//Верхняя раница повората пов вертикали
export const maxAzimuth: number = Math.PI / 2;

export const springConfig: ISpringConfig = {
  scale: 1,
  rotation: [minPolar, maxPolar],
  mass: 1,
  tension: 170,
  friction: 26,
};
