import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from '../lib/prisma';
import { authenticate } from "../plugins/authenticate";

export async function rotasPassagem(fastify: FastifyInstance) {
    fastify.post('/passagem',

        { onRequest: [authenticate] }
        , async (req, res) => {

          
            const createPassagemBody = z.object({
                origem: z.string(),
                destino: z.string(),
                dataDeIda: z.string(),
                dataDeVolta: z.string(),
                valor: z.string(),
                formaDePagamento: z.string(),
            })
           

            const { origem, destino, dataDeIda, dataDeVolta, valor, formaDePagamento } = createPassagemBody.parse(req.body)

            const usuario = await prisma.usuario.findUnique({
                where: {
                    id: req.user.sub
                }
            })

            await req.jwtVerify()

            if (!usuario) {
                return res.status(400).send({
                    message: 'Você naõ tem permissão p/ efetuar esse pagamento'
                })
            }


            try {
                await prisma.passagem.create({
                    data: {
                        origem,
                        destino,
                        dataDeIda,
                        dataDeVolta,
                        valor,
                        formaDePagamento,
                        usuarioId: usuario.id,
                    }
                })
                return res.status(200).send('Passagem comprada com sucesso!')
            }
            catch (e) {
                console.log(e)
                return res.status(500).send('Não foi possível efetuar o pagamento!')
            }


        })

}