import express, { Router } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import { Customer, Product } from './types';
import databaseA from './database';


const app = express();
const PORT = 4000;
const router = Router();
app.use(bodyParser.json());
app.use(cors());
const corsOptions = {
    origin : '*',
    credential: true,
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send("Hello World")
})

const ranID = () => {
    return Math.floor(Math.random()*1000);
}
router.get("/api/v1/customers", (req, res) => {
    res.send(databaseA.customer)
})

router.get("/api/v1/customers/:id", (req, res) => {
    const customer = databaseA.customer.find (
        (customer) => customer.id === parseInt(req.params.id)
    );
    if(typeof customer === "undefined") {
        res.sendStatus(404);
    } else {
        res.send(customer)
    }
})
router.post("/api/v1/customers", (req, res) => {
    const customer: Customer = req.body;
    databaseA.customer.push({
        id:ranID(),
        name: customer.name,
        address: customer.address,
        email: customer.email,
    });
    res.sendStatus(200);
})

router.put("/api/v1/customer/:id", (req, res) => {
    const index = databaseA.customer.findIndex(
        (customer) => customer.id === parseInt(req.params.id)
    )
    if (index != -1) {
        const input = req.body;
        const prev = databaseA.customer[index]
        const customer = {
            id:prev.id,
            name:input.name,
            address:input.address,
            email:input.email,
        }
        databaseA.customer[index] = customer;
        res.sendStatus(200);
        } else {
            res.sendStatus(404)
        }
})
router.delete("/api/v1/customers/:id", (req, res) => {
    databaseA.customer = databaseA.customer.filter(
        (customer) => customer.id != parseInt(req.params.id)
    );
    res.sendStatus(200);
})


app.use(router);
app.listen({port: PORT}, () => {
    console.log(`localhost:${PORT}에서 실행`)
})