import { Request, Response } from "express";
import { prisma } from "../app";

const createMonster = async (req: Request, res: Response) => {
    try {
        const { name, map } = req.body;
        const newMonster = await prisma.monster.create({
            data:
            {
                name,
                map
            }
        });
        res.status(201).json(newMonster);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getAllMonsters = async (req: Request, res: Response) => {
    try {
        const monsters = await prisma.monster.findMany();
        res.status(200).json(monsters);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getMonster = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const monster = await prisma.monster.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(monster);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const updateMonster = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, map } = req.body;
        const newMonster = await prisma.monster.update({
            where: {
                id: Number(id)
            },
            data:
            {
                name,
                map
            }
        });
        res.status(200).json(newMonster);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const deleteMonster = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const monster = await prisma.monster.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(monster);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export default {
    createMonster,
    updateMonster,
    getAllMonsters,
    getMonster,
    deleteMonster
}