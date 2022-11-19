import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from '../lib/prisma';
import { authenticate } from "../plugins/authenticate";

export async function rotasPassagem(fastify: FastifyInstance) {
    fastify.post('/passagem',

        { onRequest: [authenticate] }
        , async (req, res) => {

            const createPassagemParams = z.object({
                id: z.string()
            })
            const createPassagemBody = z.object({
                origem: z.string(),
                destino: z.string(),
                dataDeIda: z.string(),
                dataDeVolta: z.string(),
                valor: z.string(),
                formaDePagamento: z.string(),
            })
            const { id } = createPassagemParams.parse(req.params)

            const novaPassagem = await prisma.passagem.findUnique({
                where: {
                    id: id
                }
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
                    msg: 'Você naõ tem permissão p/ efetuar esse pagamento'
                })
            }


            await prisma.passagem.create({
                data: {
                    id,
                    origem,
                    destino,
                    dataDeIda,
                    dataDeVolta,
                    valor,
                    formaDePagamento,
                    usuarioId: usuario.id
                }
            })
        })

}