import express, {Router} from 'express';
import {createWorkshop, getWorkshop ,regsiterWorkshop} from '../controllers/WorkshopController';

const router: Router = express.Router();

router.route('/create').post(createWorkshop);
router.route('/register/:id').get(regsiterWorkshop);
router.route('/').get(getWorkshop);

export default router; 
