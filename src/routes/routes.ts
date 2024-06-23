import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreatePlacarController } from "../controllers/Placar/CreatePlacarController";
import { ListPlacarController } from "../controllers/Placar/ListPlacarController";
import { GetPlacarController } from "../controllers/Placar/GetPlacarController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  // PLACARS
  fastify.post(
    "/placar",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreatePlacarController().handle(request, reply);
    }
  );

  fastify.get(
    "/placares",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListPlacarController().handle(request, reply);
    }
  );

  fastify.get(
    "/placar/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new GetPlacarController().handle(request, reply);
    }
  );
}
