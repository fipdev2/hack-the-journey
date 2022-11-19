import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import {rotasPassagem} from './routes/ticket'

async function start() {
    const fastify = Fastify({
        logger: true,
    })

    await fastify.register(cors, {
        origin: true
    })

    await fastify.register(jwt, {
        secret: 'hackthejourney',
    })

    await fastify.listen({ port: 3333 })
}
start()