import {makeAutoObservable} from "mobx";
export interface ThemeType {
    point: PointType
    overflow: string
}
interface PointType {
    laptop: string
    tablet: string
    phone: string
}

class ThemeData {
    theme:ThemeType = {
        point: {
            laptop: '@media (max-width: 1000px)',
            tablet: '@media (max-width: 729px)',
            phone: '@media (max-width: 450px)'
        },
        overflow: 'auto'
    }

    constructor() {
        makeAutoObservable(this)
    }
    stopOverflow(newOverflow: string){
        this.theme.overflow = newOverflow
    }
}

export default new ThemeData()