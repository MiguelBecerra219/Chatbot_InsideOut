import { Box } from '@mui/material'
import { NavBar, SideBar } from '../components'
import { useState } from 'react'

/* Constante para los tamaños se enviara a los componentes para acomodar todo */
const drawer = 280

export const ChatbotLayout = ({ children }) => {
  const [open, setopen] = useState(true)

  const changeSideBar = () => {
    setopen(!open)
  }

  const closeSidebar = () => {
    // Verificar si el ancho de la ventana es menor o igual a 599 píxeles
    if (window.innerWidth <= 599) {
      setopen(false) // Solo cierra el sidebar en pantallas pequeñas
    }
  }

  const drawerWidth = open ? drawer : 0
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={ drawerWidth } changeSideBar={ changeSideBar } open={open}/>

      <SideBar drawerWidth={ drawerWidth } open={open}/>

      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: '100%' }
        }}
        onClick={closeSidebar}
      >
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  )
}
