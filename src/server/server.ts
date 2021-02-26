import * as express from 'express';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as path from 'path';
import routes from './routes';
import './middlewares/passport-strategies';

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(passport.initialize());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(routes);

app.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
