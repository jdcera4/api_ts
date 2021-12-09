import express from 'express';
import morgan from 'morgan';
import passport from 'passport'
import passportMiddleware from './middlewares/passport';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

import specialRoutes from './routes/special.routes';

const app = express();


//settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);
app.use(specialRoutes);

//Routes
app.get('/', (req, res) => {
    res.send(`The api is at localhost:${app.get('port')}`)
})

app.use(authRoutes);

export default app;
