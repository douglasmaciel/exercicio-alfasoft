import { describe, it, expect } from "vitest";
import { v4 as uuid } from "uuid";
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

  it("should be valid after passing valid parameters to constructor", () => {
    const id = uuid();
    const contact = new Contact(
      id,
      "valid name",
      "123456789",
      "valid@email.com",
      "valid-picture"
    );
    expect(contact.id).toBe(id);
    expect(contact.name).toBe("valid name");
    expect(contact.contact).toBe("123456789");
    expect(contact.email).toBe("valid@email.com");
    expect(contact.picture).toBe("valid-picture");
  });

  it("should throw with invalid id", () => {
    expect(() => {
      new Contact(
        "invalid id",
        "valid name",
        "123456789",
        "valid@email.com",
        "valid-picture"
      );
    }).toThrow("Invalid Id");
  });

  it.each(["", "a", "ab", "abc", "abcd", "abcde"])(
    "should throw with a name lesser or equal than 5 characters",
    (invalidName) => {
      const id = uuid();
      expect(() => {
        new Contact(
          id,
          invalidName,
          "123456789",
          "valid@email.com",
          "valid-picture"
        );
      }).toThrow("Invalid Name");
    }
  );

  it.each([
    "",
    "1",
    "12",
    "12345",
    "123456",
    "1234567",
    "12345678",
    "123a56789",
  ])(
    "should throw with a contact number different from 9 digits",
    (invalidContactNumber) => {
      const id = uuid();
      expect(() => {
        new Contact(
          id,
          "valid name",
          invalidContactNumber,
          "valid@email.com",
          "valid-picture"
        );
      }).toThrow("Invalid ContactNumber");
    }
  );
});
