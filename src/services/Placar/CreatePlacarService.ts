import prismaClient from "../..";
import { PlacarProps } from "../../types/types";

class CreatePlacarService {
  async execute({ 
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
    imageBase64 }: PlacarProps) {

    const placarData: any = {
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
      imageBase64
    };

    const placar = await prismaClient.placar.create({
      data: placarData,
    });

    return placar;
  }
}

export { CreatePlacarService };
