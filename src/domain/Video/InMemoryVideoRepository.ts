import { VideoRepository } from "./VideoRepository";
import { Video } from "./Video";
import { Student } from "../Student/Student";

export class InMemoryVideoRepository implements VideoRepository {
  private videos: Video[] = [];

  public add(video: Video): void {
    this.videos.push(video);
  }

  public videosFor(student: Student): Video[] {
    const today = new Date();
    const videosForStudent = this.videos.filter((video) => {
      const ageLimit = video.getAgeLimit();
      const yearsDiff = today.getFullYear() - student.getBd().getFullYear();
      return ageLimit <= yearsDiff;
    });

    return videosForStudent;
  }
}
