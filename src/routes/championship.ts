import { Router, Request, Response, NextFunction } from 'express';
import * as data from '../db/data.json';

export class Championship {

    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    public get(req: Request, res: Response, next: NextFunction) {

        let responseData = data.championships;

        if(req.query.year) {
            responseData = responseData.filter(element => (element.year == req.query.year))
        } 
        if (req.query.championship) {
            responseData = responseData.filter(element => (element.championship == req.query.championship))
        } 
        if (req.query.champion) {
            responseData = responseData.filter(element => (element.champion == req.query.champion))
        }

        res.send(responseData);
    }

    init() {
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            console.log("TEST MIDDLEWARE")
            next();
        }, this.get);
    }
}

const ChampionshipRouter = new Championship();
ChampionshipRouter.init();

export default ChampionshipRouter.router;