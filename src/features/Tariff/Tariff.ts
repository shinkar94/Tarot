import {makeAutoObservable} from "mobx";
import {v1} from "uuid";
import plusIcon from '../../img/icon/plus.svg'
import minusIcon from '../../img/icon/minus.svg'

type TariffDataType ={
    id: number
    name: string
    price: string
    places: number
    description: DescriptionType[]
    extra: ExtraType[]
    bonus: BonusType
}

export type DescriptionType = ExtraType

export type ExtraType = BonusTextType & {
    status: StatusType
}
export type BonusType = {
    title: string
    bonus_text: BonusTextType[]
}
type BonusTextType = {
    id: string,
    icon: string,
    text: string
}
type StatusType = 'static' | 'card'


export class Tariff {
    tariffData:TariffDataType[] = [
        {
            id: 1,
            name: 'Пробуждение Light',
            price: '3990 руб',
            places: 10,
            description: [
                {id: v1(),status: "static", icon: plusIcon, text: 'Анализ ошибок и страхов, блокирующих денежный поток.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Индивидуальный разбор денежного канала с помощью Матрицы судьбы.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Подготовка Вашего подсознания к изменениям.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Работа с техниками формирования целей и выстраивания стратегий их достижения.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Эффективный метод создания намерения и карты желаний.'},
            ],
            extra: [],
            bonus: {title: '', bonus_text: []}
        },
        {
            id: 2,
            name: 'Пробуждение',
            price: '7990 руб',
            places: 7,
            description: [
                {id: v1(),status: "card", icon: plusIcon, text: 'Тариф Лайт-пробуждение'},
            ],
            extra: [
                {id: v1(),status: "static", icon: plusIcon, text: 'Разбор, что необходимо именно Вам для удовлетворения своей финансовой сферой.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Медитация на проработку страхов.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Участие в трансформационной игре.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Моделирующий расклад Таро от Автора программы.'},
            ],
            bonus: {
                title: 'Бонус',
                bonus_text:[
                    {id: v1(), icon: minusIcon, text: 'Индивидуальный разбор энергий, которые будут преобладать в вашей жизни в ближайшие 6 месяцев (и рекомендации по финансовой сфере)'},
                ]
            }
        },
        {
            id: 3,
            name: 'Пробуждение Plus',
            price: '15000 руб',
            places: 3,
            description: [
                {id: v1(),status: "card", icon: plusIcon, text: 'Тариф Пробуждение'},
            ],
            extra: [
                {id: v1(),status: "static", icon: plusIcon, text: 'Индивидуальный расклад для анализа ошибок, установок, страхов, блокирующих денежный поток.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Анализ архетипов личности с помощью Таро.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Индивидуальная сессия с автором программы  на тему «Страх» + медитация.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Расклад Таро на раскрытие Вашей энергии.'},
                {id: v1(),status: "static", icon: plusIcon, text: 'Моделирующий расклад Таро от Автора программы, создаём расклад совместно с участником.'},
                {id: v1(),status: "card", icon: plusIcon, text: 'Бонус тарифа: Лайт-пробуждение'},
            ],
            bonus: {
                title: 'Бонус на выбор из двух:',
                bonus_text: [
                    {id: v1(),icon: minusIcon, text: 'Сессия по распаковке личности.'},
                    {id: v1(),icon: minusIcon, text: 'Скидка на следующее мероприятие 15%.'}
                ]
            }
        }
    ]
    constructor() {
        makeAutoObservable(this)
    }
}

export default new Tariff()