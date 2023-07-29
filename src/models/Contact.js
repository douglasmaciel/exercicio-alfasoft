class Contact {
  #id;
  #name;
  #contact;
  #email;
  #picture;

  constructor(id, name, contact, email, picture) {
    this.#id = id;
    this.#name = name;
    this.#contact = contact;
    this.#email = email;
    this.#picture = picture;
  }

  static create(name, contact, email, picture) {
    const generatedId = "defined";
    return new Contact(generatedId, name, contact, email, picture);
  }

  get id() {
    return this.#id;
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
