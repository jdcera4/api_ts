import {model, Schema, Document} from 'mongoose'
import bycript from 'bcrypt';

export interface Iuser extends Document {
    email: String,
    password: string,
    comparePassword: (password: string) => Promise<boolean>
}

const userschema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
})

userschema.pre<Iuser>('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bycript.genSalt(10);
    const hash = await bycript.hash(this.password, salt);
    this.password = hash;
    next();
})

userschema.methods.comparePassword = async function (password:string): Promise<boolean> {
    return await bycript.compare(password, this.password)
}

export default model<Iuser>('User', userschema);
