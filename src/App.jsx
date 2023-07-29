import "./App.css";
import { Container, Box } from "@mui/material";
import { ShowContacts } from "./views/ShowContacts";
import { ShowContactsVM } from "./viewModels/ShowContactsVM";
import { ContactRepositoryFake } from "./repositories/ContactRepositoryFake";

function App() {
  const repository = new ContactRepositoryFake();
  const vm = new ShowContactsVM(repository);
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <ShowContacts vm={vm} />
      </Box>
    </Container>
  );
}

export default App;
