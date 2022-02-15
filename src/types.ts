import { Color } from "@react-three/fiber";
import { ArrowFunction } from "typescript";

export interface ICoordinates{
    latitude: number,
    longitude: number
}

export interface IAttractionMarkerProps {
    coordinates: ICoordinates,
    color: Color
}

export interface INavPanelItem {
    coordinates: ICoordinates,
    title: String,
    setEarthRotation: Function,
}