import { FastifyRequest, FastifyReply } from "fastify";
import { ListPlacarService } from "../../services/Placar/ListPlacarService";

class ListPlacarController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listPlacarService = new ListPlacarService();

    const users = await listPlacarService.execute();

    reply.send(users);
  }
}

export { ListPlacarController };