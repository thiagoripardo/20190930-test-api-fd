import { Router, Request, Response, NextFunction } from 'express';
import * as data from '../db/data.json';
import { filterByKey, sortByKey, paginate } from '../utils/utils';

export class Championship {

    router: Router

    constructor() {
        this.router = Router();
        this.init();
    }

    // Examples
    // Filter: GET {url/resource}?year=2019&champion=Rafael%20Nadal&championship=US%20Open
    // Sort: GET {url/resource}?orderBy=year&order=asc
    // Pagination: GET {url/resource}?limit=5&skip=5
    public get(req: Request, res: Response, next: NextFunction) {

        let responseData = data.championships;

        // Filter
        if(req.query.year) {
            responseData = responseData.filter(element => (element.year == req.query.year))
        } 
        if (req.query.championship) {
            responseData = responseData.filter(element => (element.championship == req.query.championship))
        } 
        if (req.query.champion) {
            responseData = responseData.filter(element => (element.champion == req.query.champion))
        }

        // Sort
        if(req.query.orderBy && req.query.order){
            responseData = sortByKey(responseData, req.query.orderBy, req.query.order)
        }

        // Pagination
        if(req.query.limit && req.query.skip){
            console.log(parseInt(req.query.skip))
            // responseData = responseData.splice(0, req.query.skip)
            responseData = responseData.slice(parseInt(req.query.skip), parseInt(req.query.limit))
        }

        res.send(responseData);
    }

    init() {
        this.router.get('/', (req: Request, res: Response, next: NextFunction) => {
            // Local middleware
            next();
        }, this.get);
    }
}

const ChampionshipRouter = new Championship();
ChampionshipRouter.init();

export default ChampionshipRouter.router;