import Fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { rotasPassagem } from './routes/ticket';
import { authRotas } from './routes/auth'
import { amadeusRotas } from './routes/amadeus';

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

    await fastify.register(rotasPassagem)
    await fastify.register(authRotas)
    await fastify.register(amadeusRotas)

    await fastify.listen({ port: 3333, host: '0.0.0.0' })
}
start()