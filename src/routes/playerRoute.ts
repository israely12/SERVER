import express from "express";
import { getByParamsController, addTeamController, getTeamsController} from "../controllers/playerController";

const router = express.Router();

router.post("/filter", getByParamsController);

router.post("/AddTeam", addTeamController);

router.get("/GetAllTeams", getTeamsController);

export default router;

