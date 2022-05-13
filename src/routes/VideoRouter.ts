import express from "express";
import VideoController from "../controllers/VideoController";

const router = express.Router();

router.get("/videos", VideoController.getAll);

export default router;
