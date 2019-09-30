import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import ChampionshipRouter from '../routes/championship';

// Express server configuration
class App {

  // Reference
  public app: express.Application;

  // Constructor of the express instance
  constructor() {
    dotenv.config();
    this.app = express();
    this.middleware();
    this.routes();
  }

  // Setting up general middlewares
  private middleware(): void {
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  // API endpoints
  private routes(): void {

    let router = express.Router();

    router.get('/', (req, res, next) => {
      res.json({
        message: 'NodeJS API using Express and Typescript'
      });
    });

    this.app.use('/', router);
    this.app.use('/api/championships', ChampionshipRouter)
  }

}

export default new App().app;