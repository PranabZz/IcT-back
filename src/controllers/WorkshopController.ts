import {Express , Request, Response} from 'express';
import '../config/database';
import {User} from '../models/User';
import {Workshop} from '../models/Workshop';
import {WorkshopRegistration} from '../models/Registration';
import {getRepository} from 'typeorm';

export const createWorkshop = async(req: Request, res: Response) => {
  
  const new_workshop = new Workshop();
  new_workshop.title = req.body.title;
  new_workshop.description = req.body.description;
  new_workshop.startTime = req.body.startTime;
  new_workshop.endTime = req.body.endTime;
  new_workshop.totalSeats = req.body.totalSeats;

  const wsRepo = await getRepository(Workshop);
  try {
    const workshopSave = await wsRepo.save(new_workshop);
    res.json({message:"Sucessfully added a new workshop"});
  } catch (error) {
    console.error("There was an unexpected error", error);
  }
};

export const getWorkshop = async(req: Request, res: Response)=> {
  const workshopRepo = await getRepository(Workshop);

  try{
    const workshops = await workshopRepo.find();
    res.json({workshops:workshops});
  }catch(error){
    res.status(500).json({error:error});
  }
};

export const regsiterWorkshop = async(req: Request, res: Response) => {
  
  const workshop_id = parseInt(req.params.id);
  const current_user = req.body.email;
  
  const getUser = getRepository(User);
  const getWorkshop = getRepository(Workshop);

  try{
    const user = await getUser.findOne({ where: { email: current_user } });
    const workshop = await getWorkshop.findOne({ where: { id: workshop_id } });

    
     if(user){
  
      const workshop_reg = getRepository(WorkshopRegistration);     
      const registration = new WorkshopRegistration();
      registration.user = user;

      if (workshop) {
        registration.workshop = workshop;
      }

      await workshop_reg.save(registration);
      res.json({ 'message': 'Workshop registration successful', registration});

    }else{
      console.error("No user found");
    }
  }catch(error){
    console.error("Some error occured",error);
    
  }
};
