export class Video {
  public static PUBLIC = 1;
  public static PRIVATE = 2;

  private visibility: number = Video.PRIVATE;
  private ageLimit: number = 0;

  public getVisibility(): number {
    return this.visibility;
  }

  public checkIfVisibilityIsValidAndUpdateIt(visibility: number): void {
    if ([Video.PUBLIC, Video.PRIVATE].includes(visibility)) {
      this.visibility = visibility;
    } else {
      throw new Error("Invalid visibility");
    }
  }

  public getAgeLimit(): number {
    return this.ageLimit;
  }

  public setAgeLimit(ageLimit: number): void {
    this.ageLimit = ageLimit;
  }
}

export default Video;
