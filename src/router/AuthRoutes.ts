
import express, { Router } from 'express';
import { getLoginForm, loginController, getRegisterForm , registerController } from '../controllers/AuthController';

const router: Router = express.Router();

router.route('/login').get(getLoginForm).post(loginController);
router.route('/register').get(getRegisterForm).post(registerController);


export default router; // Export the router directly, not as an object

