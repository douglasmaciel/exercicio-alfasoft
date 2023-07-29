class ContactNumber {
  #value;

  constructor(value) {
    this.#value = value;
    if (!this.#value.match(/\d{9}/g)) throw new Error("Invalid ContactNumber");
  }

  get value() {
    return this.#value;
  }
}

export { ContactNumber };
