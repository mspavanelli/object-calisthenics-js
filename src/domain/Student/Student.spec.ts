import { describe, it, expect, beforeEach } from "vitest";
import { subDays } from "date-fns";
import { Student } from "./Student";
import { Video } from "../Video/Video";

describe("Student", () => {
  let student: Student;

  beforeEach(() => {
    student = new Student(
      "email@example.com",
      new Date("1995-04-01T10:00"),
      "John",
      "Doe",
      "Rua de Exemplo",
      "71B",
      "Meu Bairro",
      "Minha Cidade",
      "Meu estado",
      "Brasil"
    );
  });

  it("studentWithoutWatchedVideosHasAccess", () => {
    expect(student.hasAccess()).toBe(true);
  });

  it("studentWithFirstWatchedVideoInLessThan90DaysHasAccess", () => {
    const date = new Date();
    date.setDate(date.getDate() - 89);
    student.watch(new Video(), date);

    expect(student.hasAccess()).toBe(true);
  });

  it("studentWithFirstWatchedVideoInLessThan90DaysButOtherVideosWatchedHasAccess", () => {
    student.watch(new Video(), subDays(new Date(), 89));
    student.watch(new Video(), subDays(new Date(), 60));
    student.watch(new Video(), subDays(new Date(), 30));

    expect(student.hasAccess()).toBe(true);
  });

  it("studentWithFirstWatchedVideoIn90DaysDoesntHaveAccess", () => {
    const date = subDays(new Date(), 90);
    student.watch(new Video(), date);

    expect(student.hasAccess()).toBe(false);
  });

  it("studentWithFirstWatchedVideoIn90DaysButOtherVideosWatchedDoesntHaveAccess", () => {
    student.watch(new Video(), subDays(new Date(), 90));
    student.watch(new Video(), subDays(new Date(), 60));
    student.watch(new Video(), subDays(new Date(), 30));

    expect(student.hasAccess()).toBe(false);
  });
});
