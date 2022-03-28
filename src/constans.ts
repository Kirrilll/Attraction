import { Vector3 } from "three";
import { ISpring, ISpringConfig } from "./types";

//Путь до lowpoly относительно Model.tsx
export const PATH_TO_LOWPOLY_MODELS: string = '../../../models/lowpoly/';

//Путь до highpoly относительно HighPolyModel.tsx
export const PATH_TO_HIGHPOLY_MODELS: string = '../../../models/highpoly/';

//Путь до флагов отнсительно navPanekItem.tsx
export const PATH_TO_FLAGS: string = '../../../../assets/sprites/flags';

//Стандартная ширина в единицах канваса (при расширении 1920:1080)
export const VIEWPORT_WIDTH_1920: number = 15.204002238592405;

//Радиус Земли (относительно стандартной ширины)
export const EARTH_RADIUS: number =  2.2;

//Центр Земли (относительно стандартной ширины)
export const EARTH_CENTER: Vector3 = new Vector3(3, 0, 0);

//Показывает пропорцию достпримечастелности относительно Земли
export const ATTRACTION_RATIO: number = 1/1000;

//Пропорции highPoly модели
export const ATTRACTION_SIZE: number = 1 /50;

//Верхняя граница поворота по вертикали
export const minPolar: number = -Infinity;

//Нижняя граница поворота по вертикали
export const maxPolar: number = Infinity;

//Нижняя раница повората пов вертикали
export const minAimuth: number = 0;

//Верхняя раница повората пов вертикали
export const maxAzimuth: number = Math.PI / 2;


//Настройка для поворота Земли
export const springConfig: ISpringConfig = {
  scale: 1,
  rotation: [minPolar, maxPolar],
  mass: 1,
  tension: 170,
  friction: 26,
};
