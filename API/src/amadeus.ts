import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
const app = express();
const PORT = 5000;

app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.listen(PORT, () =>
    console.log(`Server is running on port: http://localhost:${PORT}`)
);




import Amadeus from 'amadeus';


const amadeus = new Amadeus({
    clientId: 'TYgLJKUG8J8MB2I4gBF0f3y5cYWJ93p4',
    clientSecret: 'rWqoYrxDbG4i1TsX'
});

app.get(`/city-and-airport-search/:parameter`, (req, res) => {
    const parameter = req.params.parameter;
    // Which cities or airports start with the parameter variable
    amadeus.referenceData.locations
        .get({
            keyword: parameter,
            subType: Amadeus.location.any,
        })
        .then(function (response: any) {
            res.send(response.result);
        })
        .catch(function (response: any) {
            res.send(response);
        });
});

app.post(`/flight-search`, (req, res) => {
    const originCode = req.query.originCode;
    const destinationCode = req.query.destinationCode;
    const dateOfDeparture = req.query.dateOfDeparture
    // Find the cheapest flights
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: originCode,
        destinationLocationCode: destinationCode,
        departureDate: dateOfDeparture,
        adults: '1',
        max: '7'
    }).then(function (response: any) {
        res.send(response.result);
    }).catch(function (response: any) {
        res.send(response);
    });
});

