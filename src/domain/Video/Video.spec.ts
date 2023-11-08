import { describe, it, expect } from "vitest";
import Video from "./Video";

describe("Video", () => {
  it("changeVisibilityMustWork", () => {
    const video = new Video();
    video.checkIfVisibilityIsValidAndUpdateIt(Video.PUBLIC);

    expect(video.getVisibility()).toBe(Video.PUBLIC);
  });
});
