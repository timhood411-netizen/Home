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

      {/* theme.spacing's base unit is 4px (matching the token scale), not MUI's
          default 8px, so these multipliers are doubled versus a stock MUI app
          to land on the same 32px/24px pixel values: py:8 -> 32px, spacing:8
          -> 32px gap, p:6 -> 24px. */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={8}>
          <Paper variant="outlined" sx={{ p: 6 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Buttons
            </Typography>
            <ButtonsSection />
          </Paper>

          <Paper variant="outlined" sx={{ p: 6 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Text fields
            </Typography>
            <TextFieldsSection />
          </Paper>

          <Paper variant="outlined" sx={{ p: 6 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Card
            </Typography>
            <CardSection />
          </Paper>

          <Paper variant="outlined" sx={{ p: 6 }}>
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
