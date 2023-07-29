import {
  v4 as uuid,
  validate as uuidValidate,
  version as uuidVersion,
} from "uuid";

class Id {
  #value;

  constructor(value) {
    this.#value = value;
    if (!uuidValidate(this.#value) || uuidVersion(this.#value) !== 4)
      throw new Error("Invalid Id");
  }

  static create() {
    return uuid();
  }

  get value() {
    return this.#value;
  }
}

export { Id };
