import { FastifyRequest, FastifyReply } from "fastify";
import { GetPlacarService } from "../../services/Placar/GetPlacarService";

class GetPlacarController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const getPlacarService = new GetPlacarService();

    const placar = await getPlacarService.execute(id);
    reply.send(placar);
  }
}

export { GetPlacarController };
