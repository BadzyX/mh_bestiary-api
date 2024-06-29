import express from "express";
import { environment } from "./config/environment";
import { PrismaClient } from "@prisma/client";
import routes from "./routes/v1"
import net from 'net';
import cors from 'cors';

export const prisma = new PrismaClient();

const app = express();
const port = 8000;

const isPortTaken = (port: number): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const tester = net.createServer()
            .once('error', err => (err.name === 'Error' ? resolve(true) : reject(err)))
            .once('listening', () => tester.once('close', () => resolve(false)).close())
            .listen(port);
    });
};

const main = async (port: number) => {
    const portTaken = await isPortTaken(port);

    environment();

    app.use(cors());
    app.options('*', cors());

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/v1", routes);

    if (!portTaken) {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } else {
        console.log(`Port ${port} is taken, trying port ${port + 1}...`);
        main(port + 1);
    }
}

main(port).then(async () => {
    await prisma.$connect();
}).catch(async (e) => {
    await prisma.$disconnect();
    process.exit(1);
});