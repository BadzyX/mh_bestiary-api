import { Request, Response } from "express";
import { prisma } from "../app";

const createWeapon = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const newWeapon = await prisma.weapon.create({
            data:
            {
                name
            }
        });
        res.status(201).json(newWeapon);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getAllWeapons = async (req: Request, res: Response) => {
    try {
        const weapons = await prisma.weapon.findMany();
        res.status(200).json(weapons);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getWeapon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const weapon = await prisma.weapon.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(weapon);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const updateWeapon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const newWeapon = await prisma.weapon.update({
            where: {
                id: Number(id)
            },
            data:
            {
                name,
            }
        });
        res.status(200).json(newWeapon);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const deleteWeapon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const weapon = await prisma.weapon.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(weapon);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export default {
    createWeapon,
    updateWeapon,
    getAllWeapons,
    getWeapon,
    deleteWeapon
}