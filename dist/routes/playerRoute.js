"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playerController_1 = require("../controllers/playerController");
const router = express_1.default.Router();
router.post("/filter", playerController_1.getByParamsController);
router.post("/AddTeam", playerController_1.addTeamController);
router.get("/GetAllTeams", playerController_1.getTeamsController);
exports.default = router;
