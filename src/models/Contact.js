import { Id } from "./types/Id";

class Contact {
  #id;
  #name;
  #contact;
  #email;
  #picture;

  constructor(id, name, contact, email, picture) {
    this.#id = new Id(id);
    this.#name = name;
    this.#contact = contact;
    this.#email = email;
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
    return this.#name;
  }

  get contact() {
    return this.#contact;
  }

  get email() {
    return this.#email;
  }

  get picture() {
    return this.#picture;
  }
}

export { Contact };
