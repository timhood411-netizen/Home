import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import ButtonsSection from './demo/ButtonsSection'
import TextFieldsSection from './demo/TextFieldsSection'
import CardSection from './demo/CardSection'
import DataTableSection from './demo/DataTableSection'

function App() {
  return (
    <>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="h1">
            MUI Component Demo
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={4}>
          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Buttons
            </Typography>
            <ButtonsSection />
          </Paper>

          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Text fields
            </Typography>
            <TextFieldsSection />
          </Paper>

          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Card
            </Typography>
            <CardSection />
          </Paper>

          <Paper variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Data table
            </Typography>
            <DataTableSection />
          </Paper>
        </Stack>
      </Container>
    </>
  )
}

export default App
