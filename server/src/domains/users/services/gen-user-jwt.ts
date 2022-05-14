import jwt from 'jsonwebtoken';
import { UserDoc } from '../models/user';
import { UserPayload } from '../../../common/exports';

const genUserJwt = (user: UserDoc) => {
    const payload: UserPayload = {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
    }
    return jwt.sign(payload, process.env.JWT_KEY!);
}

export { genUserJwt }