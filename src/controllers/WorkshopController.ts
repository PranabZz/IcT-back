import {Express , Request, Response} from 'express';
import '../config/database';
import {Workshop} from '../models/Workshop';
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
