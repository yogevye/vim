import {ProviderHandler} from './provider-handler';
import {Filter, Filteravialiblity, FilterScore, FilterSpecialist} from '../interfaces/ifilter';

export class ProvidersManager {
    static init(){
        ProviderHandler.init();
    }

    static getFilterAResults(specialty:string, date:number, minScore:number) {
        try{
            let filters: Filter[] = [];
            filters.push(new FilterScore(minScore));
            filters.push(new FilterSpecialist(specialty));
            filters.push(new Filteravialiblity(date));

            return ProviderHandler.getProvidersByFilters(filters);
        } catch (e) {
            let errorMessage = `Failed to getFilterAResults. error: ${e.message}`;
            throw new Error(errorMessage)
        }

    }


}