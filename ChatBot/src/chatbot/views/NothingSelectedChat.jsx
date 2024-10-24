import { StartOutlined } from '@mui/icons-material'
import { Grid2 } from '@mui/material'

export const NothingSelectedChat = () => {
  return (
    <Grid2
      container
      spacing={ 0 }
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{
        minHeight: 'calc(100vh - 15px)',
        backgroundColor: 'secondary.main'
      }}
    >
      <Grid2 item xs={ 1 } >
        <StartOutlined />
      </Grid2>
    </Grid2>
  )
}
