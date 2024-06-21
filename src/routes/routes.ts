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
    /* fastify.get(
      "/users",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().handle(request, reply);
      }
    );
    fastify.delete(
      "/user",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply);
      }
    );
    fastify.put(
      "/user/:id",
      async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateUserController().handle(request, reply);
      }
    )   */
  }
  