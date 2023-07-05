import {makeAutoObservable} from "mobx";


interface ThemeType {
    point: PointType
}
interface PointType {
    laptop: string
    tablet: string
    phone: string
}

class ThemeData {
    theme:ThemeType = {
        point: {
            laptop: '',
            tablet: '',
            phone: ''
        }
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new ThemeData()