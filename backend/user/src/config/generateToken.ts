import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

const JWT_SECRET = process.env.JWT_SECRET;

// interface JwtPayload {
//     id:string,
//     name:string,
//     email:string,
// }

export const generateToken = (user:any) =>{
    return jwt.sign({user},JWT_SECRET,{expiresIn:"15d"});
}