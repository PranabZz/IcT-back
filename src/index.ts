import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import AuthRoutes from './router/AuthRoutes'; 
import UserRoutes from './router/UserRoutes';
import WorkshopRoutes from './router/WorkshopRoutes';
import cors from 'cors';
import auth from './middleware/Auth';
import './config/database';


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000; 
app.use(bodyParser.json());
app.use(cors());


// Use the AuthRoutes for handling routes /api
app.use('/api/', AuthRoutes); //Used to login,logout and register a user 

app.use('/api/user/',auth,UserRoutes); //To Show the details of the user and the workshop or sessions they are part of   

app.use('/api/workshop/', auth , WorkshopRoutes);
// app.use('/api/session/', auth , sessionRoutes);

/* 
   admin routes for admin dashboard control 
   app.use('/api/admin',admin, adminDashboardControl);

*/

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

