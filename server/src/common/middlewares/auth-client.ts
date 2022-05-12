import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';
import { Roles } from '../interfaces/roles';


export const authClient = (req: Request, res: Response, next: NextFunction) => {
    if (req.currentUser?.role != Roles.Client) {
        throw new NotAuthorizedError();
    }
    next();
}