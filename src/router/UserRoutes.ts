import express , {Router} from 'express';
import {getUser} from '../controllers/UserController';

const router: Router = express.Router();

router.route('/').get(getUser);


export default router;
