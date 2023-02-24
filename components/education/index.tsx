import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, ListItemIcon } from '@mui/material';

export default function Education() {
    return (
      <div className="row">
        <div className="col">
          <Typography variant="h5" gutterBottom>Opleiding</Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AssignmentTurnedInIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="MSc Computer Science (Software Technology track) - TU Delft" secondary="Februari 2017 - Mei 2020" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AssignmentTurnedInIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="BSc Technische Informatica - TU Delft" secondary="September 2013 - Februari 2017" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AssignmentTurnedInIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="VWO - CSG Prins Maurits" secondary="September 2007 - Juli 2013" />
            </ListItem>
          </List>
        </div>
      </div>
    );
}