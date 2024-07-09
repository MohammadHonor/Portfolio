import mongoose from 'mongoose';

import { Schema } from 'mongoose';

const contactSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    massage:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
export const Contact = new mongoose.model('Contact',contactSchema);

