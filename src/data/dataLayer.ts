import jsonFile from "jsonfile";
import { Player } from "../models/playerModel";
import {Response} from "../models/responseTeam"
import {PlayerData} from "../models/playerData"

const DB_PATH = './src/data/dataBase.json';
const TEAM_PATH = './src/data/teams.json'


export async function getPlayersByParams(player: Player): Promise<Player [] | String> {
    const data = await jsonFile.readFile(DB_PATH);
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
    const playersData: PlayerData[] = data[index].filter((p: PlayerData) => 
        p.threePercent > threePercent && p.twoPercent > twoPercent && p.points > points
    );
    
    const players: Player[] = playersData.map((p: PlayerData) => ({
        position: p.position,
        threePercent: p.threePercent,
        twoPercent: p.twoPercent,
        points: p.points
    }));

    if (players ) {
        return players;
    }
    return "";
    
   
}


export async function addTeam(playersArr:Player[]): Promise<Response> {
    const data = await jsonFile.readFile(TEAM_PATH);

    const newResponse: Response = {
        Message:"",
    Team: {
        players:playersArr
        }
    };

    data.push(newResponse); 
    
    await jsonFile.writeFile(TEAM_PATH, data);
    
    return newResponse; 
}


export async function getAllTeams(): Promise<Response[]> {
    const data = await jsonFile.readFile(TEAM_PATH);
    return data;
}
