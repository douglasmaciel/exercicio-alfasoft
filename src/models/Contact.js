import { Id } from "./types/Id";
import { Name } from "./types/Name";
import { ContactNumber } from "./types/ContactNumber";
import { Email } from "./types/Email";

class Contact {
  #id;
  #name;
  #contactNumber;
  #email;
  #picture;

  constructor(id, name, contact, email, picture) {
    this.#id = new Id(id);
    this.#name = new Name(name);
    this.#contactNumber = new ContactNumber(contact);
    this.#email = new Email(email);
    this.#picture = picture;
  }

  static create(name, contact, email, picture) {
    const generatedId = Id.create();
    return new Contact(generatedId, name, contact, email, picture);
  }

  get id() {
    return this.#id.value;
  }

  get name() {
    return this.#name.value;
  }

  get contact() {
    return this.#contactNumber.value;
  }

  get email() {
    return this.#email.value;
  }

  get picture() {
    return this.#picture;
  }
}

export { Contact };
