import { Quaternion, Vector3 } from "three";
import { ICoordinates } from "../types";

export default class GeometryHelper{

    public static degToRad(value:number):number{
        return value * (Math.PI / 180);
    } 

    public static rotateByCoordinates(coordinates: ICoordinates): Quaternion{

        const latQ: Quaternion = new Quaternion().setFromAxisAngle(new Vector3(-1, 0, 0), this.degToRad(coordinates.latitude - 90));
        const lonQ: Quaternion = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), this.degToRad(coordinates.longitude + 90));

        return lonQ.multiply(latQ);
    }
}