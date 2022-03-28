import { PATH_TO_HIGHPOLY_MODELS, PATH_TO_LOWPOLY_MODELS } from "./constans";
import { IAttractionHigh, IAttractionNav, ICoordinates, PopupInfoType } from "./types";




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
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'suhbfubsuyfgsuyeyuhbsfufueubsububfusf'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'swuhbywaydjinaokmpponpoiosu'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'laokoiniucaucusucuicsusaui'
            }
        ],
        title: 'Биг-бен',
        location: 'Британия, Лондон'
    },
    {
        id: 1,
        highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'spasskay-tower/spasskay_tower.gltf',
        information: [
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: '213784723gch v7'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'ianwsiu8w7h'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'IUSOBNDBUSDUNS9UNVSD'
            }
        ],
        title: 'Спасская башня',
        location: 'Россия, Москва'
    },
    {
        id: 2,
        highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'tower-of-pisa/tower_of_pisa.gltf',
        information: [
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'Башня является колокольней католического собора Duomo Santa Maria AssuntaВысота башни составляет 55,86 м от земли в самой низкой точке и 56,7 м в самой высокой точке.Башня находится под наклоном, который оценивается на текущий момент в 3°-4°.Автор проекта Бонанно Пизано.'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: '5545545'
            }
        ],
        title: 'Пизанская башня',
        location: 'Италия, Пиза'
    },
    {
        id: 3,
        highPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
        information: [
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'sdgiuboubsubvsun8svcinmsfo'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: '29un387ybe un9uacsf'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: '8h34b8yreuy vzsxin9ad09jwer98jrg8ubbf'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'oiubfdsw8yb9asd7yvafs87by'
            }
        ],
        title: 'Сиднейский оперный театр',
        location: 'Австралия, Сидней'
    }
]


export function getAttractionById(id: number):IAttractionHigh{
    return  dataHigh.find((value) => value.id === id)!
}
