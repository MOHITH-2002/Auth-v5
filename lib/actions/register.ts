"use server";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { RegisterSchema } from "../zodSchema";
import { connectToDb } from "../database/db";
import User from "../database/model/user";


export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    await connectToDb();
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const {email,name,password} = validatedFields.data;

  const existingUser = await User.findOne({email});
  if(existingUser) {
    return { error: "Email already exists"}
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  
  await User.create({ email, name, password:hashedPassword });
  return { success: "Email sent!" };
  } catch (error) {
    console.log(error);
    
  }
};