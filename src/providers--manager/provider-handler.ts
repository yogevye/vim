import {IProvider} from '../interfaces/iprovider';
import {getAviliableProviders, sortScores} from '../utils/utils';

const PROVIDERS: IProvider[] = require('../../assets/providers/providers.json');

export class ProviderHandler {
    private static providers: Map<string, IProvider>;
    private static indexSpecialty: Map<string, Map<number, IProvider[]>>;


    static init() {
        this.providers = new Map<string, IProvider>();
        this.indexSpecialty = new Map<string, Map<number, IProvider[]>>();
        PROVIDERS.map((provider: IProvider) => {
            this.providers.set(provider.name, provider);
            provider.specialties.map((specialty: string) => {
                specialty = specialty.toUpperCase();
                let specialtyMap: Map<number, IProvider[]> = this.indexSpecialty.get(specialty);
                if (!specialtyMap) {
                    specialtyMap = new Map<number, IProvider[]>();
                }
                if (!specialtyMap.get(provider.score)) {
                    specialtyMap.set(provider.score, [provider]);
                } else {
                    specialtyMap.set(provider.score, [...specialtyMap.get(provider.score), provider]);
                }
                this.indexSpecialty.set(specialty, specialtyMap);
            })
        });
    }

    static getProvidersByFilters(specialty: string, date: number, minScore: number): IProvider[] {
        try {
            specialty = specialty.toUpperCase();
            let results = [];
            let specialtyMap = this.indexSpecialty.get(specialty);
            if(!specialtyMap){
                return [];
            }
            [...specialtyMap.keys()].filter((score: number) => score >= minScore).sort(sortScores).map((key: number) => {
                results = [...results, ...getAviliableProviders(specialtyMap.get(key), date)];
            });

            return results
        } catch (e) {
            throw new Error(`failed to get providers by filter. specialty: ${specialty}, date: ${date}, minScore: ${minScore}. error: ${e.message}`)
        }

    }
}