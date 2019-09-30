"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const championship_1 = require("../routes/championship");
class App {
    constructor() {
        dotenv.config();
        this.app = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                message: 'NodeJS API using Express and Typescript'
            });
        });
        this.app.use('/', router);
        this.app.use('/api/championships', championship_1.default);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map