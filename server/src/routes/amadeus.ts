import Amadeus from 'amadeus';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';

const amadeus = new Amadeus({
    clientId: 'TYgLJKUG8J8MB2I4gBF0f3y5cYWJ93p4',
    clientSecret: 'rWqoYrxDbG4i1TsX'
});

export async function amadeusRotas(fastify: FastifyInstance) {
    fastify.get('/city-and-airport-search/:parameter',
        async (req, res) => {
            const createParameter = z.object({
                parameter: z.string()
            })
            const { parameter } = createParameter.parse(req.params)


            amadeus.referenceData.locations
                .get({
                    keyword: parameter,
                    subType: Amadeus.location.any,
                })
                .then(function (response: { result: unknown; }) {
                    res.send(response.result);
                })
                .catch(function (response: unknown) {
                    res.send(response);
                });
        })
    
}