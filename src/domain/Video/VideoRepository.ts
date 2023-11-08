import { Video } from "./Video";
import { Student } from "../Student/Student";

export interface VideoRepository {
  add(video: Video): void;
  videosFor(student: Student): Video[];
}
