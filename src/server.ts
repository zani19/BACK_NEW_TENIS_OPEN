import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes/routes";

const app = Fastify({ logger: true });

app.register(cors, {
  origin: true, // Isso permite todas as origens, ajuste conforme necessário
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ error: error.message });
});

const start = async () => {
  await app.register(routes);

  try {
    await app.listen(3000, '0.0.0.0');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
