import { Request, Response } from "express";
import { prisma } from "../app";

const createMerchant = async (req: Request, res: Response) => {
    try {
        const { name, type, village, generation } = req.body;
        const newMerchant = await prisma.merchant.create({
            data:
            {
                name,
                type,
                village,
                generation
            }
        });
        res.status(201).json(newMerchant);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getAllMerchants = async (req: Request, res: Response) => {
    try {
        const merchants = await prisma.merchant.findMany();
        res.status(200).json(merchants);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const getMerchant = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const merchant = await prisma.merchant.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(merchant);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const updateMerchant = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, type, village, generation } = req.body;
        const newMerchant = await prisma.merchant.update({
            where: {
                id: Number(id)
            },
            data:
            {
                name,
                type,
                village,
                generation
            }
        });
        res.status(200).json(newMerchant);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

const deleteMerchant = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const merchant = await prisma.merchant.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json(merchant);
    } catch (e) {
        res.status(500).json({ error: e });
    }
};

export default {
    createMerchant,
    updateMerchant,
    getAllMerchants,
    getMerchant,
    deleteMerchant
}