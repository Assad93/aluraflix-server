import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class VideoRepository {
  public static async getAll() {
    const videos = await prisma.video.findMany();

    return videos;
  }
}

export default VideoRepository;
