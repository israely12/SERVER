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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayersByParams = getPlayersByParams;
exports.addTeam = addTeam;
exports.getAllTeams = getAllTeams;
const jsonfile_1 = __importDefault(require("jsonfile"));
const DB_PATH = './src/data/dataBase.json';
const TEAM_PATH = './src/data/teams.json';
function getPlayersByParams(player) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield jsonfile_1.default.readFile(DB_PATH);
        const position = player.position;
        const threePercent = player.threePercent;
        const twoPercent = player.twoPercent;
        const points = player.points;
        let index = 0;
        switch (position) {
            case "PG":
                index = 0;
                break;
            case "SG":
                index = 1;
                break;
            case "SF":
                index = 2;
                break;
            case "PF":
                index = 3;
                break;
            case "C":
                index = 4;
                break;
            default:
                break;
        }
        const playersData = data[index].filter((p) => p.threePercent > threePercent && p.twoPercent > twoPercent && p.points > points);
        const players = playersData.map((p) => ({
            position: p.position,
            threePercent: p.threePercent,
            twoPercent: p.twoPercent,
            points: p.points
        }));
        if (players) {
            return players;
        }
        return "";
    });
}
function addTeam(playersArr) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield jsonfile_1.default.readFile(TEAM_PATH);
        const newResponse = {
            Message: "",
            Team: {
                players: playersArr
            }
        };
        data.push(newResponse);
        yield jsonfile_1.default.writeFile(TEAM_PATH, data);
        return newResponse;
    });
}
function getAllTeams() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield jsonfile_1.default.readFile(TEAM_PATH);
        return data;
    });
}
