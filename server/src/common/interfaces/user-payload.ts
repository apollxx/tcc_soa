import mongoose from "mongoose"
import { Roles } from './roles';
interface UserPayload {
    id: mongoose.Types.ObjectId;
    email: string;
    role: Roles;
    name: string
}

export { UserPayload }