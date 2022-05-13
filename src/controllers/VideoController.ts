import { Request, Response } from "express";
import VideoService from "../services/VideoService";

class VideoController {
  public static async getAll(req: Request, res: Response) {
    try {
      const videos = await VideoService.getAll();
      res.json(videos);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default VideoController;
