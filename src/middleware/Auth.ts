
import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

    jwt.verify(token, 'Pranab', (err , response ) => {
    if (err) {
      console.error('JWT verification error:', err);
      return res.sendStatus(401);
    } else{
      //req.body.username = response.username;
      next();
    } 
  });
};

export default auth;




