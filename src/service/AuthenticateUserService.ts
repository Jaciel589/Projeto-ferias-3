import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import User from "../models/User";
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth'; 

interface Request {
    email: string,
    senha: string,
}
interface Response {
    user: User;
//    token: string;
}

class AuthenticateUserService {
    public async execute({ email, senha }: Request): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: { email }
        });

        if (!user) {
            throw new Error('Inconrrect email/password combination');
        }
     

        const passwordMatched = await compare(senha, user.senha);

        if (!passwordMatched) {
            throw new Error('Inconrrect email/password combination');
        }
/*
        const { secret, expiresIn } = authConfig.jtw;
 
        const token = sign({}, secret, {
            subject: user.id, 
            expiresIn: expiresIn, 

        });
*/
        return {
            user,
         //   token,
        }


    }
}

export default AuthenticateUserService;