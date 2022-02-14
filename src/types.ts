import { Color } from "@react-three/fiber";

export interface ICoordinates{
    latitude: number,
    longitude: number
}

export interface IAttractionProps {
    coordinates: ICoordinates,
    color: Color
}