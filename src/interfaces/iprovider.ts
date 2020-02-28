import {IAvailableDates} from "./iavailableDates";

export interface IProvider {
    name:string,
    specialties:string[],
    availableDates: IAvailableDates[],
    score: number
}

