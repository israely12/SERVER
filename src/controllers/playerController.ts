import { Request, Response } from "express";
import { getPlayersByParams, addTeam, getAllTeams } from "../data/dataLayer";

export const getByParamsController = async (req: Request, res: Response) => {
  const { player } = req.body;

  try {
    const players = await getPlayersByParams(player);
    if (players) {
      res.status(200).json({ players });
    } else {
      res.status(401).json({ error: "error" });
    }
  } catch (error) {
    res.status(500).json({ error: "erorr" });
  }
};

export const addTeamController = async (req: Request, res: Response) => {
  const { playersArr } = req.body;

  try {
    const checkPlayers = await addTeam(playersArr);
    res.status(201).json(checkPlayers);
  } catch (error) {
    res.status(500).json({ error: "error adding Team" });
  }
};

export const getTeamsController = async (res: Response) => {
  try {
    const Teams = await getAllTeams();
    res.status(200).json(Teams);
  } catch (error) {
    res.status(500).json({ error: "error while geting the Teams" });
  }
};
