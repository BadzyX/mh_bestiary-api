import express from "express";
import characterRoute from "./character.route";
import monsterRoute from "./monster.route";
import placeRoute from "./place.route";
import mapRoute from "./map.route";
import merchantRoute from "./merchant.route";
import weaponRoute from "./weapon.route";
import gameRoute from "./game.route";

const router = express.Router();

const defaultRoutes = [
    {
        path: "/characters",
        route: characterRoute
    },
    {
        path: "/monsters",
        route: monsterRoute
    },
    {
        path: "/places",
        route: placeRoute
    },
    {
        path: "/maps",
        route: mapRoute
    },
    {
        path: "/merchants",
        route: merchantRoute
    },
    {
        path: "/weapons",
        route: weaponRoute
    },
    {
        path: "/games",
        route: gameRoute
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;