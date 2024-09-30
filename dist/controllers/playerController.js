"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamsController = exports.addTeamController = exports.getByParamsController = void 0;
const dataLayer_1 = require("../data/dataLayer");
const getByParamsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { player } = req.body;
    try {
        const players = yield (0, dataLayer_1.getPlayersByParams)(player);
        if (players) {
            res.status(200).json({ players });
        }
        else {
            res.status(401).json({ error: "error" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "erorr" });
    }
});
exports.getByParamsController = getByParamsController;
const addTeamController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { playersArr } = req.body;
    try {
        const checkPlayers = yield (0, dataLayer_1.addTeam)(playersArr);
        res.status(201).json(checkPlayers);
    }
    catch (error) {
        res.status(500).json({ error: "error adding Team" });
    }
});
exports.addTeamController = addTeamController;
const getTeamsController = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Teams = yield (0, dataLayer_1.getAllTeams)();
        res.status(200).json(Teams);
    }
    catch (error) {
        res.status(500).json({ error: "error while geting the Teams" });
    }
});
exports.getTeamsController = getTeamsController;
