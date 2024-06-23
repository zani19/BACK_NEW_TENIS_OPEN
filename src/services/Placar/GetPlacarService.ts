import prismaClient from "../..";

class GetPlacarService {
  async execute(id: string) {
    const placar = await prismaClient.placar.findUnique({
      where: {
        id: id,
      },
    });

    if (!placar) {
      throw new Error("Placar não encontrado");
    }

    return placar;
  }
}

export { GetPlacarService };
