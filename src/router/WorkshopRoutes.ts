import express, {Router} from 'express';
import {createWorkshop, getWorkshop} from '../controllers/WorkshopController';

const router: Router = express.Router();

router.route('/create').post(createWorkshop);
router.route('/').get(getWorkshop);

export default router; 
