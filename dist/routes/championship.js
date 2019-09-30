"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data = require("../db/data.json");
const utils_1 = require("../utils/utils");
class Championship {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    get(req, res, next) {
        let responseData = data.championships;
        if (req.query.year) {
            responseData = utils_1.filterByKey(responseData, 'year', req.query.year);
        }
        if (req.query.championship) {
            responseData = utils_1.filterByKey(responseData, 'championship', req.query.championship);
        }
        if (req.query.champion) {
            responseData = utils_1.filterByKey(responseData, 'champion', req.query.champion);
        }
        if (req.query.orderBy && req.query.order) {
            responseData = utils_1.sortByKey(responseData, req.query.orderBy, req.query.order);
        }
        if (req.query.pageSize && req.query.pageNumber) {
            responseData = utils_1.paginate(responseData, parseInt(req.query.pageSize), parseInt(req.query.pageNumber));
        }
        res.send(responseData);
    }
    init() {
        this.router.get('/', (req, res, next) => {
            next();
        }, this.get);
    }
}
exports.Championship = Championship;
const ChampionshipRouter = new Championship();
ChampionshipRouter.init();
exports.default = ChampionshipRouter.router;
//# sourceMappingURL=championship.js.map