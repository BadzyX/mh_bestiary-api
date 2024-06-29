import { Request, Response } from "express";
import { prisma } from "../app";

const createPlace = async (req: Request, res: Response) => {
    try {
        const { name, type, generation } = req.body;
        const newPlace = await prisma.place.create({
            data:
            {
                name,
                type,
                generation
            }
        });
        res.status(201).json(newPlace);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getAllPlaces = async (req: Request, res: Response) => {
    try {
        const places = await prisma.place.findMany();
        res.status(200).json(places);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getPlace = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const place = await prisma.place.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(place);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const updatePlace = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, type, generation } = req.body;
        const newPlace = await prisma.place.update({
            where: {
                id: Number(id)
            },
            data:
            {
                name,
                type,
                generation
            }
        });
        res.status(200).json(newPlace);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const deletePlace = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const place = await prisma.place.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(place);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export default {
    createPlace,
    updatePlace,
    getAllPlaces,
    getPlace,
    deletePlace
}