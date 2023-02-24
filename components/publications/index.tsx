import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArticleIcon from '@mui/icons-material/Article';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar } from '@mui/material';
import React from 'react';

export default function Publications() {
    return (
      <div className="row">
        <div className="col">
          <Typography variant="h5" gutterBottom>Publicaties</Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ArticleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary="Analyzing Workers Performance in Online Mapping Tasks Across Web, Mobile, and Virtual Reality Platforms" 
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" sx={{mb: 2}}>
                      Gerard van Alphen, Sihang Qiu, Alessandro Bozzon and Geert-Jan Houben - <a href="https://www.humancomputation.com/" target="_blank">HCOMP 2020</a>
                    </Typography>
                    <Typography component="span" variant="body2" color="text.primary" display="block" mt={2}>
                      Voor mijn master thesis heb ik onderzoek gedaan naar crowd-mapping. Hieruit volgde een paper welke ingediend is bij de Human Computation conferentie en geaccepteerd is (acceptance rate van de ingediende papers voor de conferentie was 27%). 
                      De paper is <a href="https://www.researchgate.net/publication/344162093_Analyzing_Workers_Performance_in_Online_Mapping_Tasks_Across_Web_Mobile_and_Virtual_Reality_Platforms" target="_blank">hier</a> te downloaden.
                    </Typography>
                  </React.Fragment>
                }/>
            </ListItem>
          </List>
        </div>
      </div>
    );
}