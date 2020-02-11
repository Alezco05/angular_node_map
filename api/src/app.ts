import express from 'express';
import indexRoutes from './routes/index'

const app = express();
//Settings
app.set('port', process.env.PORT || 3800);

//Routes
app.use('/', indexRoutes);

export default app;