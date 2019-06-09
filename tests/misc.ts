import * as express from 'express';
import axios from 'axios';

import { app } from "../src/app";
import { Http2Server } from 'http2';
import { testConfig } from './test_config'

export class Misc {
    server: express.Application;
    serverInstance: Http2Server;

    constructor(server: express.Application = app) {
        this.server = server;
    }
    startServer(): void {
        const instance = this.server.listen(testConfig.port, () => {
            console.log(`Test server is working on ${testConfig.port}`);
        });
        this.serverInstance = instance;
    }
    closeServer(): void {
        this.serverInstance.close();
    }
    getAxios(token?: string): any {
        const options = {
            baseURL: `${testConfig.protocol}://${testConfig.host}:${testConfig.port}`,
        };
        
        // if (token) {
        //     // @ts-ignore
        //     options.headers = {
        //     Authorization: `Bearer ${token}`,
        //     };
        // }
        return axios.create(options);
    }
}