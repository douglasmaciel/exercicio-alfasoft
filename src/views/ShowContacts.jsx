import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react";
import { useEffect } from "react";

const ShowContacts = observer((props) => {
  const { vm } = props;
  useEffect(() => {
    (async () => {
      await vm.getAll();
    })();
  }, []);
  const contacts = vm.state.map((data) => (
    <ListItem divider key={data.id}>
      <ListItemAvatar>
        <Avatar src={data.picture} />
      </ListItemAvatar>
      <ListItemText
        primary={`${data.name} - ${data.email}`}
        secondary={
          <Typography component="span">Contact: {data.contact}</Typography>
        }
      ></ListItemText>
    </ListItem>
  ));

  return <List>{contacts}</List>;
});

export { ShowContacts };
