import {IProvider} from '../interfaces/iprovider';
import {Filter} from '../interfaces/ifilter';
import {FilterManager} from '../filters/filter-manager';

const PROVIDERS: IProvider[] = require('../../assets/providers/providers.json');

export class ProviderHandler {
    private static providers: Map<string, IProvider>;

    static init() {
        this.providers = new Map<string, IProvider>();
        PROVIDERS.map((provider: IProvider) => this.providers.set(provider.name, provider));
    }

    static getProvidersByFilters(filters:Filter[]){
        console.log(filters);
        try{
            let results:IProvider[] = [];
            for(let key in this.providers.keys()){
                let provider: IProvider = this.providers[key];
                if(FilterManager.filterProvider(this.providers[key], filters)){
                    results.push(provider);
                }
            }

            return results.sort((provider1:IProvider, provider2:IProvider) => provider1.score - provider2.score);
        }catch (e) {
            let errorMassage = `Failed to get providers by filter. error: ${e.message}`;
            throw new Error(errorMassage);
        }
        
    }
}