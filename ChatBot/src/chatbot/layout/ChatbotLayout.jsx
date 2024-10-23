import { Box } from '@mui/material'
import { NavBar } from '../components'

/* Constante para los tamaños se enviara a los componentes para acomodar todo */
const drawerWidth = 240

export const ChatbotLayout = ({ children }) => {
  return (
    <Box>
      <NavBar drawerWidth={ drawerWidth }/>

      {/* Sidebar */}

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  )
}
