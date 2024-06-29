import { Request, Response } from "express";
import { prisma } from "../app";

const createCharacter = async (req: Request, res: Response) => {
    try {
        const { name, possesses, weapons, village } = req.body;
        const newCharacter = await prisma.character.create({
            data:
            {
                name,
                possesses,
                weapons,
                village
            }
        });
        res.status(201).json(newCharacter);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getAllCharacters = async (req: Request, res: Response) => {
    try {
        const characters = await prisma.character.findMany();
        res.status(200).json(characters);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getCharacter = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const character = await prisma.character.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(character);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const updateCharacter = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, possesses, weapons, village } = req.body;
        const newCharacter = await prisma.character.update({
            where: {
                id: Number(id)
            },
            data:
            {
                name,
                possesses,
                weapons,
                village
            }
        });
        res.status(200).json(newCharacter);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const deleteCharacter = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const character = await prisma.character.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(character);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export default {
    createCharacter,
    updateCharacter,
    getAllCharacters,
    getCharacter,
    deleteCharacter
}