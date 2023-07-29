import { ShowContacts } from "./views/ShowContacts";
import { ShowContactsVM } from "./viewModels/ShowContactsVM";
import { ContactRepositoryFake } from "./repositories/ContactRepositoryFake";
import { Route, Routes } from "react-router-dom";

function App() {
  const repository = new ContactRepositoryFake();
  const vm = new ShowContactsVM(repository);
  return (
    <Routes>
      <Route index element={<ShowContacts vm={vm} />} />
    </Routes>
  );
}

export default App;
