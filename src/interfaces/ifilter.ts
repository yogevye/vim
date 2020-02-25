import {IProvider} from "./iprovider";

export class FilterScore implements Filter{
    value: number;

    constructor(value:number) {
        this.value = value;
    }


    filter(provider:IProvider): boolean{
        return this.value < provider.score;
    }
}

export class FilterSpecialist implements Filter{
    value: string;

    constructor(value:string){
        this.value = value;
    }

    filter(provider:IProvider): boolean{
        return provider.specialties.indexOf(this.value) !== -1;
    }
}

export class Filteravialiblity implements Filter{
    value:number;

    constructor(value:number){
        this.value = value;
    }

    filter(provider:IProvider): boolean{
        return this.value >= provider.avialiableDates.from && this.value <= provider.avialiableDates.to;
    }
}


export interface Filter {
    filter(provider):boolean;
}

export type FilterType = 'between' | 'equlas' | 'iclude'