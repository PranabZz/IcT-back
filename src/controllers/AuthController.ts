import {Express , Request, Response} from 'express';
import { getRepository } from 'typeorm';
import {User} from '../models/User';
import * as jwt from 'jsonwebtoken';


// getLoginForm, loginController, getRegisterForm , registerController

export const getLoginForm = async(req: Request, res: Response) => {
  res.json({page:"**Login page hit success**"});
};

export const loginController = async(req: Request, res: Response) => {
  const {email, password} = req.body;
  
  const userRepo = getRepository(User);
  
  try {
    const credsCheck = await userRepo.findOne({ where : {email,password}});
    
    if(credsCheck){
      const token = jwt.sign({email}, 'Pranab', {expiresIn : '1hrs'});
      res.json({sucess:"Loggin sucess", user: credsCheck, token: token});

    }else{
      res.json({fail:"Login not sucess"});
    }  
    
  } catch (error) {
      console.error("Sorry cannot connect");
  }
  
};

export const getRegisterForm = async(req: Request, res: Response) => {
  res.json({page:"**Registration page**"});
};

export const registerController = async(req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  
  const newUser = new User();
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.email = email;
  newUser.password = password;

  const userRepo = getRepository(User);

  try {
    const userSave = await userRepo.save(newUser);
    res.json({message:'User registred', user:userSave});
  } catch (error) {
    console.error("Some error in register", error);
    
  }
};


