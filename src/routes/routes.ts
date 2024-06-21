import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreatePlacarController } from "../controllers/Placar/CreatePlacarController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  //PLACARS
  fastify.post(
    "/placar",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreatePlacarController().handle(request, reply);
    }
  );
}
