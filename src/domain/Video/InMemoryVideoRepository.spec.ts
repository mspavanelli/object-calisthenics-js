import { describe, it, expect } from "vitest";
import { Video } from "./Video";
import { Student } from "../Student/Student";
import { InMemoryVideoRepository } from "./InMemoryVideoRepository";

describe("InMemoryVideoRepository", () => {
  it.skip("findingVideosForAStudentMustFilterAgeLimit", () => {
    const repository = new InMemoryVideoRepository();

    for (let i = 21; i >= 17; i--) {
      const video = new Video();
      video.setAgeLimit(i);
      repository.add(video);
    }

    const student = null;
    // const student = new Student();
    // student.getBd = jest
    //   .fn()
    //   .mockReturnValue(new Date(new Date().getFullYear() - 19, 0, 1));

    const videoList = repository.videosFor(student);

    expect(videoList).toHaveLength(3);
  });
});
