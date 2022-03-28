import { Billboard } from '@react-three/drei';
import React, { useMemo } from 'react';
import * as THREE from 'three'
import { Vector3 } from 'three';
import { IPopupProp, PopupInfoType } from '../../../types';
import Popup from '../attracrion-popup/popup';

interface IPopupCloud {
    popups: Array<IPopupProp>,
    radius: number,
    center: Vector3,
}

const PopupCloud: React.FC<IPopupCloud> = (props) => {

    const positions = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (props.popups.length + 1)
        const thetaSpan = (Math.PI * 2) / props.popups.length
        for (let i = 1; i < props.popups.length + 1; i++)
            for (let j = 0; j < props.popups.length; j++)
                temp.push(new THREE.Vector3().setFromSpherical(spherical.set(props.radius, phiSpan * i, thetaSpan * j)))
        return temp
    }, [props.popups.length, props.radius]);

    console.log(positions)

    return (
        <>
            {props.popups.map((popup, index) => (
                <Billboard follow={true} scale={0.4} position={positions[index]}>
                    <Popup
                        title= {popup.title}
                        type={PopupInfoType.BUILDING}
                        content={popup.content}
                    ></Popup>
                </Billboard>
            ))}
        </>)
}

export default PopupCloud;