import VideoRepository from "../repositories/VideoRepository";

class VideoService {
  public static async getAll() {
    const videos = await VideoRepository.getAll();

    return videos;
  }
}

export default VideoService;
