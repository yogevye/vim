import app from './app-server/app';
import {ProviderHandler} from './providers--manager/provider-handler';

function run(){
    const port = 3500;
    ProviderHandler.init();
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
