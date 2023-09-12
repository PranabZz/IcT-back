import {createConnection} from "typeorm";
import {User} from "../models/User";
import {WorkshopRegistration, SessionRegistration} from "../models/Registration";
import {Workshop} from "../models/Workshop";
import {Session} from "../models/Session";
import {Speaker} from "../models/Speaker";

(async()=>{
 try{
    const connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "pranab",
      database: "new_itc",
      entities: [User,WorkshopRegistration, SessionRegistration, Session,Speaker,Workshop],
      synchronize: true,
    });
    console.log("Connected !! ");
  }catch(err){
    console.error("Unable to connect  ", err);
 } 
}) ();
