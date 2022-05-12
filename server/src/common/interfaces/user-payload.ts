import { Roles } from './roles';
interface UserPayload {
    id: string;
    email: string;
    role: Roles;
    name: string
}

export { UserPayload }