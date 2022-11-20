import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authenticate } from "../plugins/authenticate";

export async function authRotas(fastify: FastifyInstance) {
    fastify.get('/eu',{
      onRequest:[authenticate],  
    }, async (req) => {
        return { user: req.user }
    })


    fastify.post('/usuario', async (req) => {
        const createUserBody = z.object({
            accessToken: z.string(),

        })
        const { accessToken } = createUserBody.parse(req.body)

        const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo',
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
        const userData = await userResponse.json()

        const userInfoSchema = z.object({
            id: z.string(),
            email: z.string().email(),
            name: z.string(),
        })
        const userInfo = userInfoSchema.parse(userData)



        let usuario = await prisma.usuario.findUnique({
            where: {
                googleId: userInfo.id
            }
        })


        if (!usuario) {
            usuario = await prisma.usuario.create({
                data: {
                    googleId: userInfo.id,
                    name: userInfo.name,
                    email: userInfo.email,
                }
            })
        }



        const token = fastify.jwt.sign({
            name: usuario.name,
        }, {
            sub: usuario.id,
            expiresIn: '7 days',
        })



        return { token }
    })
}
