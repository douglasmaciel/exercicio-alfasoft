import { describe, it, expect } from "vitest";
import { Contact } from "./types/Contact";
import { ContactRepositoryFake } from "../repositories/ContactRepositoryFake";
import { ContactModel } from "./ContactModel";

describe("ContactModel", () => {
  it("should return all contacts when getAll is called", async () => {
    const contactModel = new ContactModel(new ContactRepositoryFake());
    await contactModel.getAll();
    expect(Array.isArray(contactModel.state)).toBeTruthy();
    expect(contactModel.state[0]).toBeInstanceOf(Contact);
  });
});
