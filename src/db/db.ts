import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONECTION_STRING as string)
    console.log('conectado')
  } catch (error) {
    console.log(error)
  } 
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true,
  },
})

export const User = model('User', userSchema) 


