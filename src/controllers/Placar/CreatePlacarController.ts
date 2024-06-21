import { FastifyReply, FastifyRequest } from "fastify";
import { PlacarProps } from "../../types/types";
import { CreatePlacarService } from "../../services/Placar/CreatePlacarService";

class CreatePlacarController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    let {
      date,
      player1,
      player1Category,
      player1Score,
      player1Tie,
      player2,
      player2Category,
      player2Score,
      player2Tie,
      locationName,
      imageBase64,
    } = request.body as PlacarProps;

    player1 = player1.toUpperCase();
    player2 = player2.toUpperCase();
   
    const placarService = new CreatePlacarService();

    const placar = await placarService.execute({
      date,
      player1,
      player1Category,
      player1Score,
      player1Tie,
      player2,
      player2Category,
      player2Score,
      player2Tie,
      locationName,
      imageBase64,
    });

    reply.send(placar);
  }
}

export { CreatePlacarController };
