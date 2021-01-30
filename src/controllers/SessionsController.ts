import { Request, Response } from 'express';  
import AuthenticateUserService from '../service/AuthenticateUserService';

export default {
    async session(request: Request, response: Response) {

        const { email, senha } = request.body;
        
        const authenticateUser = new AuthenticateUserService();

        const { user} = await authenticateUser.execute({
            email,
            senha,
        })
        console.log(user)
        return response.json(user);


    }

}