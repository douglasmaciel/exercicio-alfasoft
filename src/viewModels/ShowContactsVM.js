import { action, autorun, makeObservable, observable } from "mobx";
import { ContactModel } from "../models/ContactModel";

class ShowContactsVM {
  #model;
  state = [];

  constructor(repository) {
    makeObservable(this, {
      state: observable,
      setState: action,
      getAll: action,
    });
    this.#model = new ContactModel(repository);
    autorun(() => {
      this.setState();
      this.#model.state;
    });
  }

  setState() {
    this.state = this.#model.state;
  }

  async getAll() {
    await this.#model.getAll();
  }
}

export { ShowContactsVM };
