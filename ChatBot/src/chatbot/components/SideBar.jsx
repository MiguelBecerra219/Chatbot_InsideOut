import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const SideBar = ({ drawerWidth = 240, open, changeSideBar }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant={'permanent'}
        open={open}
        onClose={changeSideBar} // Cierra el drawer cuando se hace clic fuera en 'temporary'
        ModalProps={{
          keepMounted: true // Mantener montado en pantallas móviles para mejorar el rendimiento
        }}
        sx={{
          display: { xs: 'block', sm: 'none' }, // Solo mostrar 'temporary' en pantallas pequeñas
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar sx={{ backgroundColor: '#6b8d2e', color: 'white' }}>
          <Typography variant='h6' noWrap component='div'>
            Miguel Becerra
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {['Chat numero 1', 'Chat numero 2', 'Chat numero 3', 'Chat numero 4', 'Chat numero 5', 'Chat numero 6'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid2 container>
                  <ListItemText primary={text} />
                </Grid2>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Drawer persistente para pantallas grandes */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          display: { xs: 'none', sm: 'block' }, // Mostrar 'persistent' en pantallas grandes
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar sx={{ backgroundColor: '#6b8d2e', color: 'white' }}>
          <Typography variant='h6' noWrap component='div'>
            Miguel Becerra
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {['Chat numero 1', 'Chat numero 2', 'Chat numero 3', 'Chat numero 4', 'Chat numero 5', 'Chat numero 6'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton >
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid2 container>
                  <ListItemText primary={text} />
                </Grid2>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}
