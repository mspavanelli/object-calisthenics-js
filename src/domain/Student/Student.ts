import { differenceInDays } from "date-fns";
import { Video } from "../Video/Video";

export class Student {
  private email: string;
  private bd: Date;
  private watchedVideos: Map<Video, Date>;
  private fName: string;
  private lName: string;
  public street: string;
  public number: string;
  public province: string;
  public city: string;
  public state: string;
  public country: string;

  constructor(
    email: string,
    bd: DateTime,
    fName: string,
    lName: string,
    street: string,
    number: string,
    province: string,
    city: string,
    state: string,
    country: string
  ) {
    this.watchedVideos = new Map();
    this.setEmail(email);
    this.bd = bd;
    this.fName = fName;
    this.lName = lName;
    this.street = street;
    this.number = number;
    this.province = province;
    this.city = city;
    this.state = state;
    this.country = country;
  }

  public getFullName(): string {
    return `${this.fName} ${this.lName}`;
  }

  private setEmail(email: string): void {
    if (this.validateEmail(email)) {
      this.email = email;
    } else {
      throw new Error("Invalid e-mail address");
    }
  }

  public getEmail(): string {
    return this.email;
  }

  public getBd(): Date {
    return this.bd;
  }

  public watch(video: Video, date: Date): void {
    this.watchedVideos.set(video, date);
  }

  public hasAccess(): boolean {
    if (this.watchedVideos.size > 0) {
      const firstDate = this.getFirstWatchedVideoDate();
      const today = new Date();

      if (differenceInDays(today, firstDate) >= 90) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  private getFirstWatchedVideoDate(): Date {
    const dates = Array.from(this.watchedVideos.values());
    dates.sort((a, b) => b.getDate() - a.getDate());

    return dates[0];
  }
}
