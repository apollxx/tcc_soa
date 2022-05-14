import mongoose from "mongoose";
import { Roles } from '../../../common/interfaces/roles'
import { Password } from "../services/password";

// Interface that describes the props 
// required to create (build) a new user
interface UserAttrs {
    email: string;
    password: string;
    role: Roles;
    name: string;
    phone?: string;
    address?: string;
}

// An interface that describes the props
// that a user Model has (overall db schema)
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

// Interface that describe the props
// that a User Document has (specific to document)
export interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
    role: Roles;
    name: string,
    phone?: string,
    address?: string,
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: String,
    address: String
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.password;
            delete ret.__v;
        }
    }
})

// async () => would execute in the context of this file
userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed)
    }
    done();
})

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };