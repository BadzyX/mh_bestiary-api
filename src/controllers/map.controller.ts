import { Request, Response } from "express";
import { prisma } from "../app";

const createMap = async (req: Request, res: Response) => {
    try {
        const { name, type } = req.body;
        const newMap = await prisma.map.create({
            data:
            {
                name,
                type
            }
        });
        res.status(201).json(newMap);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getAllMaps = async (req: Request, res: Response) => {
    try {
        const maps = await prisma.map.findMany();
        res.status(200).json(maps);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getMap = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const map = await prisma.map.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(map);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const updateMap = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, type } = req.body;
        const newMap = await prisma.map.update({
            where: {
                id: Number(id)
            },
            data:
            {
                name,
                type
            }
        });
        res.status(200).json(newMap);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const deleteMap = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const map = await prisma.map.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(map);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export default {
    createMap,
    updateMap,
    getAllMaps,
    getMap,
    deleteMap
}