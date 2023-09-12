import {Express , Request, Response} from 'express';
import '../config/database';
import {User} from '../models/User';
import {getRepository} from 'typeorm';


export const getUser = async(req: Request,res: Response)=>{
  const current_user = req.body.email;
  
  const getUser = getRepository(User);

  try {
    const user = await getUser.findOne({ where: { email: current_user } });
    res.json({user:user});
  } catch (error) {
    console.error('Cannot fetch data'); 
  }
};
