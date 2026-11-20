import { CssBaseline, Paper, Typography, Container, Grid, List, ListItem, ListItemText, Divider } from '@mui/material'
import React from 'react'

const Page = (props : any) => {
  const { AuthUser } = props

  return (
    <Container component="div" sx={{ flexGrow: 1 }}>
      <CssBaseline />
        <Grid
          container
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={1}>
            <Grid item xs={4}>
              <Paper>
                <Typography gutterBottom={false} noWrap={true} align={ 'center' } variant="subtitle1" component="h6">
                  {AuthUser.name}&apos;s rotations
                </Typography>
                <List component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Rotation1" secondary="rotation 1 description"/>
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary="Rotation2" secondary="rotation 2 description"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Rotation3" secondary="rotation 3 description"/>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Rotation4" secondary="rotation 4 description"/>
                    </ListItem>
                </List>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <Typography gutterBottom={false} noWrap={true} align={ 'center' } variant="subtitle1" component="h6">
                Rotation 1 details
              </Typography>
              <List component="nav" aria-label="mailbox folders">
                <ListItem>
                  <ListItemText primary="mv1" secondary="date: 22/06/2022 driver: Bertrand Vermaut"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv2" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv3" secondary="date: 22/06/2022 driver: Bertrand Vermaut"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv4" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv5" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv6" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv7" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv8" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv9" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv10" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText primary="mv11" secondary="date: 22/06/2022 driver: Carl Declercq"/>
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
    </Container>
  )
}

export default Page
