import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes/routes";


const app = Fastify({logger: true});

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({error: error.message})
})

const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try{
        await app.listen(3000, '0.0.0.0');

    }catch(err){
        process.exit(1)
    }
}

start();