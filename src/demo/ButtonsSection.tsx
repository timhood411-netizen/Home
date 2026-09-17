import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'

export default function ButtonsSection() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <IconButton color="primary" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Box>
        <Typography variant="caption" component="p" sx={{ mb: 1, color: 'text.secondary' }}>
          Button color="onColor" — matches the Event Banner doc's Button
          "OnColor" type, used when the CTA sits on a dark banner background
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ flexWrap: 'wrap', alignItems: 'center', bgcolor: 'primary.dark', p: 3, borderRadius: 1 }}
        >
          <Button variant="contained" color="onColor" size="large">
            Learn more
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}
