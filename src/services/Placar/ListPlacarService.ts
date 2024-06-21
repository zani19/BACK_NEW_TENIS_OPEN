import prismaClient from "../..";

class ListPlacarService {
    async execute() {
        const placars = await prismaClient.placar.findMany({            
        });

        return placars;
    }
}

export {ListPlacarService}