import * as fastify from 'fastify';
import {RoutesApi} from "./routes-api/routes-api";

class App {
    public fastify;

    constructor() {
        this.fastify = fastify();
        this.mountRoutes();
    }
    private mountRoutes(): void {
        new RoutesApi().initRoutes(this.fastify);
    }
}

export default new App().fastify;
