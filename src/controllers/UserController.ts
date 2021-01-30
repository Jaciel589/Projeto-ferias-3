import { hash } from 'bcryptjs';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm'
import User from '../models/User'; 


export default {

    async create(request: Request, response: Response) {
        const usersRepository = getRepository(User)
        const { nome, email, senha } = request.body;
 
        try{
 
        const checkExistEmail = await usersRepository.findOne({
            where: { email }
        });

        if (checkExistEmail)
            throw new Error('Email já cadastrado.');
 
        const hashedPassword = await hash(senha, 8);

        const user = usersRepository.create({
            nome,
            email,
            senha: hashedPassword,
        })

        await usersRepository.save(user);
        return response.json(user);
      }catch(err) {
           console.log(err)
      }

    }
}