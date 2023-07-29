import { describe, it, expect } from "vitest";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("should be valid after create method has been called", () => {
    const contact = Contact.create(
      "valid name",
      "123456789",
      "valid@email.com",
      "valid-picture"
    );
    expect(contact.id).toBeDefined();
    expect(contact.name).toBe("valid name");
    expect(contact.contact).toBe("123456789");
    expect(contact.email).toBe("valid@email.com");
    expect(contact.picture).toBe("valid-picture");
  });

  it("should be valid after passing valid parameters", () => {
    const contact = new Contact(
      "valid id",
      "valid name",
      "123456789",
      "valid@email.com",
      "valid-picture"
    );
    expect(contact.id).toBe("valid id");
    expect(contact.name).toBe("valid name");
    expect(contact.contact).toBe("123456789");
    expect(contact.email).toBe("valid@email.com");
    expect(contact.picture).toBe("valid-picture");
  });
});
