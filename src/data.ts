import { PATH_TO_HIGHPOLY_MODELS, PATH_TO_LOWPOLY_MODELS } from "./constans";
import { IAttractionHigh, IAttractionNav, ICoordinates } from "./types";




export const dataNavs: Array<IAttractionNav> = [
    {
        idHigh: 0,
        coordinates: { latitude: 0, longitude: 0 },
        lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'big-ben/big-ben.gltf',
        //highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'big-ben/big-ben.gltf',
        title: 'Биг-Бен',
        flagDefaultPath: '/assets/sprites/flag/flags_default/UK.png',
        flagHoveredPath: '/assets/sprites/flag/flags_hovered/UK_HOVERED.png'
    },
    {
        idHigh: 1,
        coordinates: { latitude: 40.7143, longitude: -74.006 },
        lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'spasskay-tower/spasskay_tower.gltf',
       // highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'spasskay-tower/spasskay_tower.gltf',
        title: 'Спасская башня',
        flagDefaultPath: '/assets/sprites/flag/flags_default/RU.png',
        flagHoveredPath: '/assets/sprites/flag/flags_hovered/RU_HOVERED.png'
    },
    {
        idHigh: 2,
        coordinates: { latitude: 48.8534100, longitude: 2.3488000 },
        lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'tower-of-pisa/tower_of_pisa.gltf',
       // highPolyModelPath: PATH_TO_HIGHPOLY_MODELS + 'tower-of-pisa/tower_of_pisa.gltf',
        title: 'Пизанская башня',
        flagDefaultPath: '/assets/sprites/flag/flags_default/IT.png',
        flagHoveredPath: '/assets/sprites/flag/flags_hovered/IT_HOVERED.png'
    },
    {
        idHigh: 3,
        coordinates: { latitude: 43.7229843, longitude: 10.3966227 },
        lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
        //highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
        title: 'Оперный театр',
        flagDefaultPath: '/assets/sprites/flag/flags_default/AU.png',
        flagHoveredPath: '/assets/sprites/flag/flags_hovered/AU_HOVERED.png'
    },
];


export const dataHigh: Array<IAttractionHigh> = [
    {
        id: 0,
        highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'big-ben/big-ben.gltf',
        information: [
            'sfsff',
            'adadgad',
            'adadadDZX'
        ],
        title: 'Биг-бен',
        location: 'Британия, Лондон'
    },
    {
        id: 1,
        highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'spasskay-tower/spasskay_tower.gltf',
        information: [
            'sfsff',
            'sfsfc',
            '3653'
        ],
        title: 'Спасская башня',
        location: 'Россия, Москва'
    },
    {
        id: 2,
        highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'tower-of-pisa/tower_of_pisa.gltf',
        information: [
            'sfsff',
            ' cxd',
            '453',
            'aaaaaf'
        ],
        title: 'Пизанская башня',
        location: 'Италия, Пиза'
    },
    {
        id: 3,
        highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
        information: [
            'sfsff',
            'adadgad',
            'adadadDZX'
        ],
        title: 'Сиднейский оперный театр',
        location: 'Австралия, Сидней'
    }
]


export function getAttractionById(id: number):IAttractionHigh{
    return  dataHigh.find((value) => value.id === id)!
}
