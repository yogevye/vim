import {IProvider} from '../../interfaces/iprovider';
import {checkAppointmentsParams, ICheckRes} from "../../utils/check-params";
import {ProviderHandler} from "../../providers--manager/provider-handler";

export class RoutesApi{
    initRoutes(app: any) {
        app.get('/', this.simpleServerUp);
        app.get('/appointments', this.getAppointments)
    }


    getAppointments(req, res){
        try{
            let {specialty, date, minScore} = req.query;
            let checkRes:ICheckRes = checkAppointmentsParams(specialty, Number(date), Number(minScore));
            if(checkRes.res){
                let providers:IProvider[] = ProviderHandler.getProvidersByFilters(specialty, Number(date), Number(minScore));
                res.status(200).send(providers);
            } else {
                res.status(400).send(checkRes.message)
            }

        } catch (e) {
            console.log(e);
            res.status(500).send(`Unable to fetch appoinments. error: ${e.message}`)
        }
    }

    simpleServerUp(req, res) {
        res.send('simple server');
    }
}