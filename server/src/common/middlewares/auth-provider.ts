import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { Roles } from '../interfaces/roles';


export const authProvider = (req: Request, res: Response, next: NextFunction) => {
    if (req.currentUser?.role != Roles.Provider) {
        throw new NotAuthorizedError();
    }
    next();
}