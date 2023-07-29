class Name {
  #value;

  constructor(value) {
    this.#value = value;
    if (this.#value.length <= 5) throw new Error("Invalid Name");
  }

  get value() {
    return this.#value;
  }
}

export { Name };
