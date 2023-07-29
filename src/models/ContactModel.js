import { flow, makeObservable, observable } from "mobx";
import { Contact } from "./types/Contact";

class ContactModel {
  #repository;
  state = [];

  constructor(repository) {
    makeObservable(this, {
      state: observable,
      getAll: flow,
    });
    this.#repository = repository;
  }

  *getAll() {
    const { data } = yield this.#repository.getAll();
    this.state = data.map((item) => {
      return new Contact(
        item.id,
        item.name,
        item.contact,
        item.email,
        item.picture
      );
    });
  }
}

export { ContactModel };
