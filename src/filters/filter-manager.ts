import {IProvider} from "../interfaces/iprovider";
import {Filter} from "../interfaces/ifilter";

export class FilterManager {

    static filterProvider(provider:IProvider, filters:Filter[]):boolean{
        return filters.filter((filter:Filter) => filter.filter(provider)).length === filters.length;
    }
}