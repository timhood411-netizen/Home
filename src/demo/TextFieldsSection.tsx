import { useState } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

export default function TextFieldsSection() {
  const [email, setEmail] = useState('')

  return (
    <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
      <TextField label="Standard" variant="standard" />
      <TextField label="Outlined" variant="outlined" />
      <TextField label="Filled" variant="filled" />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        helperText="We'll never share your email."
      />
      <TextField label="Disabled" disabled defaultValue="Can't edit this" />
      <TextField label="Error" error defaultValue="Invalid value" helperText="This field is required" />
    </Stack>
  )
}
