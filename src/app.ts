import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send(`The api is at localhost:${app.get('port')}`)
})

export default app;