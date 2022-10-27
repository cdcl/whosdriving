import { Box, Paper, Stack, List, ListItem, ListItemText, Divider } from '@mui/material'
import React from 'react'

const Page = (props : any) => {
  const { AuthUser } = props

  return (
    <Box sx={{ width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={3}>
        <Paper>
            {AuthUser.name}
            <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Rotation1" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Rotation2" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Rotation3" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Rotation4" />
                </ListItem>
            </List>
        </Paper>
        <Paper>
            Item 2
        </Paper>
      </Stack>
    </Box>
  )
}

export default Page
