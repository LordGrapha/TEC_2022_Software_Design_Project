import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import history from 'connect-history-api-fallback';
import mongoose, { ConnectOptions } from 'mongoose';

class App {

  private app = express();

  constructor() {
    this.configMiddleware();
    this.configRoutes()
    this.connectDatabase();
    this.startServer();
  }

  private configMiddleware(){
    // Middleware
    this.app.use(morgan('tiny'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // Middleware para Vue.js router modo history
    this.app.use(history());
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  private configRoutes(){
    // Rutas
    this.app.get('/', (req, res) => {
      res.send('Hello World!');
    });
  }

  private async connectDatabase(){
    const uri = 'mongodb://localhost:27017';
    const options = {useNewUrlParser: true, useUnifiedTopology: true};
    await mongoose.connect(uri, options as ConnectOptions);
  }

  private startServer(){
    this.app.set('puerto', process.env.PORT || 3000);
    this.app.listen(this.app.get('puerto'), () => {
      console.log('Example app listening on port: '+ this.app.get('puerto'));
    });
  }

}

new App();
