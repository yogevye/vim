import {IAvailableDates} from "./iavailableDates";

export interface IProvider {
    name:string,
    specialties:string[],
    avialiableDates: IAvailableDates,
    score: number
}

