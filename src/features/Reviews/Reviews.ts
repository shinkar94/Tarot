import {makeAutoObservable} from "mobx";
import {v1} from "uuid";

type ReviewsDataType = {
    id: string
    name: string
    message: string
}

class Reviews {
    reviews_data:ReviewsDataType[] = [
        {id: v1(), name: 'Nikitich', message: 'У меня происходили настолько неоднозначные, практически фантастические события и я так благодарен этому мастеру за то, что я заранее хоть на малый процент была к ним подготовлен.'},
        {id: v1(), name: 'Art98@', message: 'Извините пока не хочу говорить,чтобы не сглазить,еще не все сбылось просто по времени. Но если сбудется я буду ее всем советовать тут)'},
        {id: v1(), name: 'Mari8800Somich', message: 'Мила поможет Вам разобраться в межличностых отношениях, обрести гармонию в семье, узнать заранее об успехах и кризисах в бизнесе, принять верное решение в деловых вопросах, выбрать правильное время для совершения сделок по недвижимости, узнать больше об интересующих Вас людях по фото'},
        {id: v1(), name: 'Violetta@Rosman', message: 'Мила — это опытный специалист, который поможет в решении самых сложных жизненных проблем.\n' +
                'Профессионализм и наследственный дар прорицательницы Милы помогут Вам справиться с труднейшими жизненными ситуациями.'},
        {id: v1(), name: 'Katrin_0_199', message: 'Вообще могу сказать - сбывается,но только у хороших и опытных гадалок. А их немного. У меня сбылось всё с этого курса'},
        {id: v1(), name: 'Olga_Safronova', message: 'Также Мила откроет двери удачи, поможет привлечь в свою жизнь вторую половинку, снимет негатив, поставит защиту, скорректирует судьбу. Для этих целей она изготавливает индивидуально атрибутику под проблему клиента.'},
    ]


    constructor() {
        makeAutoObservable(this)
    }
}

export default new Reviews()