"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data = require("../db/data.json");
class Championship {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    get(req, res, next) {
        let responseData = data.championships;
        if (req.query.year) {
            responseData = responseData.filter(element => (element.year == req.query.year));
        }
        if (req.query.championship) {
            responseData = responseData.filter(element => (element.championship == req.query.championship));
        }
        if (req.query.champion) {
            responseData = responseData.filter(element => (element.champion == req.query.champion));
        }
        res.send(responseData);
    }
    init() {
        this.router.get('/', (req, res, next) => {
            console.log("TEST MIDDLEWARE");
            next();
        }, this.get);
    }
}
exports.Championship = Championship;
const ChampionshipRouter = new Championship();
ChampionshipRouter.init();
exports.default = ChampionshipRouter.router;
//# sourceMappingURL=championship.js.map