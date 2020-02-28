import {IProvider} from "../interfaces/iprovider";
import {IAvailableDates} from "../interfaces/iavailableDates";

export function sortScores(score1: number, score2: number) {
    return score2 - score1;
}

export function getAviliableProviders(providers:IProvider[], date:number):string[] {
    let providersNames:string[] = [];
    providers.map((provider:IProvider)=>{
        if(provider.availableDates.find((providerDate: IAvailableDates) => date >= providerDate.from && date <= providerDate.to)){
            providersNames.push(provider.name);
        }
    });
    return providersNames;
}