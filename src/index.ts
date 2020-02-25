import app from './app-server/app';
import {ProvidersManager} from "./providers--manager/providers-manager";

function run(){
    const port = 3500;
    ProvidersManager.init();
    app.register(require('fastify-cors'), {
        origin: '*',
        credentials: true,
        methods: ['GET', 'POST']
    });

    app.listen(port, (err) => {
        if (err) {
            return console.log(err);
        }

        return console.log(`server is listening on ${port}`);
    });
}

run();
