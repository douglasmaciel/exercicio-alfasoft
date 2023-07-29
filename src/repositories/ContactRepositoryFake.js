class ContactRepositoryFake {
  #data = [
    {
      id: "7de8fe8d-83b3-4285-9c15-f4ab97fc63b7",
      name: "name 1",
      contact: "123456789",
      email: "email1@example.com",
      picture: "picture1",
    },
    {
      id: "cd672ad7-ec9f-4209-b63c-682744d9a190",
      name: "name 2",
      contact: "234567891",
      email: "email2@example.com",
      picture: "picture2",
    },
    {
      id: "9d73c1d6-9ecc-48a6-8080-f9e502e48805",
      name: "name 3",
      contact: "345678912",
      email: "email3@example.com",
      picture: "picture3",
    },
    {
      id: "dcceed8a-7161-4652-8f05-1c311af3c9cb",
      name: "name 4",
      contact: "456789123",
      email: "email4@example.com",
      picture: "picture4",
    },
    {
      id: "d3cc7542-219d-4905-adfb-4b38e4f1a5c2",
      name: "name 5",
      contact: "567891234",
      email: "email5@example.com",
      picture: "picture5",
    },
  ];

  async getAll() {
    return {
      data: this.#data,
    };
  }
}

export { ContactRepositoryFake };
