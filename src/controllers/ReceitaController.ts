import { Request, Response } from 'express';
import { getConnection, getRepository } from 'typeorm'
import Receita from '../models/Receita';

export default {

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      console.log(id)
      const receitasRepository = getRepository(Receita);
      await receitasRepository.delete(id);
      return response.json({ ok: "deletado" });
    } catch (err) {

    }

  },

  async editar(request: Request, response: Response) {
    const { id } = request.params;
    try {


      const {
        titulo,
        descricao,
      } = request.body;

      await getConnection()
        .createQueryBuilder()
        .update(Receita)
        .set({
          titulo: titulo, descricao: descricao
        })
        .where("id = :id", { id: id })
        .execute();
      return response.status(200).json({ ok: 'atualizado' });

    } catch (err) {
      console.log(err)
    }

  },

  async listaReceita(request: Request, response: Response) {
    const { user_id } = request.params;
    const receitasRepository = getRepository(Receita);
    const receitas = await receitasRepository.find({
      where: {
        user_id
      }
    })

    return response.json(receitas);
  },

  async create(request: Request, response: Response) {
    const receitasRepository = getRepository(Receita)
    const {
      titulo,
      descricao,
      user_id,
    } = request.body;

    console.log(request.body)

    const receita = receitasRepository.create({
      titulo,
      descricao,
      user_id,

    })
    await receitasRepository.save(receita);
    return response.json(receita)

  },


}
