class Picture {
  #value;

  constructor(value) {
    this.#value = value;
    if (!this.#value) throw new Error("Invalid Picture");
  }

  get value() {
    return this.#value;
  }
}

export { Picture };
