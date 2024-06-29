import { Request, Response } from "express";
import { prisma } from "../app";

const createGame = async (req: Request, res: Response) => {
    try {
        const { name, platform } = req.body;
        const newGame = await prisma.game.create({
            data:
            {
                name,
                platform
            }
        });
        res.status(201).json(newGame);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getAllGames = async (req: Request, res: Response) => {
    try {
        const games = await prisma.game.findMany();
        res.status(200).json(games);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getGame = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const game = await prisma.game.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(game);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const updateGame = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, platform } = req.body;
        const newGame = await prisma.game.update({
            where: {
                id: Number(id)
            },
            data:
            {
                name,
                platform
            }
        });
        res.status(200).json(newGame);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const deleteGame = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const game = await prisma.game.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(game);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export default {
    createGame,
    updateGame,
    getAllGames,
    getGame,
    deleteGame
}