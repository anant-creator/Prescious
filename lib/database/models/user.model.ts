import { Schema, model, models } from "mongoose";

export interface UUser extends Document {
    clerkId: number;
    email: string;
    username: string;
    photo: String;
    firstName?: string;
    lastName?: string;
    planId: number;
    creditBalance: number;
}

const UserSchema = new Schema({
    clerkId: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: URL, required: true},
    fitstName: {type: String},
    lastName: {type: String},
    planId: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10},
});

const User = models?.User || model('User', UserSchema);

export default User;