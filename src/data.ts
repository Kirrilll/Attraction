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
        title: 'Спасская башня',
        flagDefaultPath: '/assets/sprites/flag/flags_default/RU.png',
        flagHoveredPath: '/assets/sprites/flag/flags_hovered/RU_HOVERED.png'
    },
    {
        idHigh: 2,
        coordinates: { latitude: 43.7229843, longitude: 10.3966227 },
        lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'tower-of-pisa/tower_of_pisa.gltf',
        title: 'Пизанская башня',
        flagDefaultPath: '/assets/sprites/flag/flags_default/IT.png',
        flagHoveredPath: '/assets/sprites/flag/flags_hovered/IT_HOVERED.png'
    },
    {
        idHigh: 3,
        coordinates: { latitude: 48.8534100, longitude: 2.3488000 },
        lowPolyModelPath: PATH_TO_LOWPOLY_MODELS + 'sydney-opera-house/sydney_opera_house.gltf',
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
                content: 'История Биг Бeн нaчaлaсь в 1837 году, когдa в плaмeни пожaрa былa уничтожeнa большaя чaсть Вeстминстeрского дворцa. Послe принятия рeшeния о строитeльствe нового комплeксa здaний спeциaльно сформировaннaя комиссия рaссмотрeлa 97 проeктов и остaновилa свой выбор нa готичeском эскизe Чaрльзa Бэрри. Сама башня построена в 1859 году в готическом стиле. Архитектором стал Огастес Уэлби Пьюджин. Общая высота вместе со шпилем – 96,3 метра. Если 334 ступеньки уже выглядят пугающе, то представьте себе путешествие в 334 ступеньки да еще и с 14-тонным колоколом. Переносили его только один раз после отливки - человек, ответственный за транспортировку его на постоянное место на колокольне понял, что он слишком тяжел для легкого подъема по узкой лестнице. По точным расчетам, подъем колокола с помощью гигантской лебедки на 200-футовую высоту оказался возможным, хоть и трудным. От начала до завершения работа заняла 30 часов.'
            },
            {
                title: 'Интересные факты',
                type: PopupInfoType.INTERESTING,
                content: '-Избегая современных высокотехнологичных методов часового дела, Биг-Бен полагается на куда более старомодный метод: «Счастливую монету». Постоянно находящаяся на вершине качающегося маятника груда монет, уже не выпускающихся в Британии. Масса груды балансирует центр масс маятника, обеспечивая постоянный темп колебаний и последовательный хронометраж. Удаление или прибавление одной монетки может менять ход часов на 0,4 секунды в день. В 2009 три из десяти монет, находящихся на верхушке маятника были убраны ради пятифунтовой монеты, изготовленной к Олимпийским играм 2012 в Лондоне. -В 1949 году Биг-Бен столкнулся с противником куда более могущественным, чем Люфтваффе - со стаей скворцов. В августе того года группа птичек решила, что огромная минутная стрелка будет отличным насестом. Стрелка привлекла так много птиц, что их общий вес замедлил часы на целых четыре с половиной минуты. Правление устранило эту ошибку через несколько часов. -Если вы думали, что английское правительство поручило разработку ведущего хронометра лучшим часовых дел мастерам, то вы ошибались. Часы спроектировали два человека, никакого отношения не имевших к часовому делу: королевский астроном сэр Джордж Биддель Эйри дал подробные технические характеристики, которыми должны были обладать часы, а юрист и политик сэр Эдмунд Беккет Денисон спроектировал механизм.'
            },
            {
                title: 'Общие сведения',
                type: PopupInfoType.GENERAL,
                content: `Официальное название главной достопримечательности Лондона — «Башня Елизаветы». Тогда почему Биг Бен так называется, и с чем же это связано? Ответить на этот вопрос поможет наименование самого большого колокола в этой башне, который носит имя Big Ben. Его звон было слышно громче всего.`
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
                type: PopupInfoType.INTERESTING,
                content: 'ianwsiu8w7h'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.GENERAL,
                content: 'IUSOBNDBUSDUNS9UNVSD'
            }
        ],
        title: 'Спасская башня',
        location: 'Россия, Москва'
    },
    {
        id: 2,
        highPolyModelPath: 'https://downloader.disk.yandex.ru/disk/1ed3b872bdb72dcd398403461d1e862439e3a119c6be218884abfb0292632233/624747f6/q0VXBEFBkYltsRj2H9525MXN_knwNY5vb-UsSuDEMseEe6ThvaLhrMwohR3qbRVN9iQtLh_Ksdw58vmjoT-ang%3D%3D?uid=1200320564&filename=tower.fbx&disposition=attachment&hash=&limit=0&content_type=application%2Foctet-stream&owner_uid=1200320564&fsize=14755008&hid=6a6dea51013e13e93e8932967fbe6368&media_type=image&tknv=v2&etag=e054a8ce22d51a3ffc713984fe144826',
        information: [
            {
                title: 'Строительство',
                type: PopupInfoType.BUILDING,
                content: 'Кривизна башни связана с особенностями земель Италии: грунт неоднороден. Так, под северной частью башни почва намного тверже, чем в южной части. Соответственно, сооружение с одной стороны проседает. Некоторые исследователи считают, что башня изначально планировалась с наклоном. Но подтверждений этой теории нет, поскольку не сохранились чертежи строения.'
            },
            {
                title: 'Интересные факты',
                type: PopupInfoType.INTERESTING,
                content: '-Первое время Пизанская башня наклонялась на север, но затем наклонилась в противоположную, сторону, на юг. В таком виде её и можно наблюдать в наши дни в Италии -Её строительство затянулось почти на 200 лет, причём началось оно ещё более 8 веков назад, ещё в 1173 году. -Колокольня, расположенная на её вершине, стоит ровнее — это не обман зрения.'
            },
            {
                title: 'Общие сведения',
                type: PopupInfoType.GENERAL,
                content: 'Башня является колокольней католического собора Duomo Santa Maria Assunta. Высота башни составляет 55,86 м от земли в самой низкой точке и 56,7 м в самой высокой точке. Башня находится под наклоном, который оценивается на текущий момент в 3°-4°. Автор проекта Бонанно Пизано.'
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
                type: PopupInfoType.INTERESTING,
                content: '29un387ybe un9uacsf'
            },
            {
                title: 'Строительство',
                type: PopupInfoType.GENERAL,
                content: '8h34b8yreuy vzsxin9ad09jwer98jrg8ubbf'
            },

        ],
        title: 'Сиднейский оперный театр',
        location: 'Австралия, Сидней'
    }
]


export function getAttractionById(id: number):IAttractionHigh{
    return  dataHigh.find((value) => value.id === id)!
}
