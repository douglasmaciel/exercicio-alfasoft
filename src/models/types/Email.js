import Joi from "joi";

class Email {
  #value;
  #schema = Joi.string().email({ tlds: { allow: false } });

  constructor(value) {
    this.#value = value;
    const { error } = this.#schema.validate(this.#value);
    if (error) throw new Error("Invalid Email");
  }

  get value() {
    return this.#value;
  }
}

export { Email };
