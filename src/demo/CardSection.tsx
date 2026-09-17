import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function CardSection() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Event Banner
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          A full-width banner for surfacing time-sensitive announcements —
          scheduled events, sales, training sessions, and maintenance windows.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn more</Button>
        <Button size="small">Dismiss</Button>
      </CardActions>
    </Card>
  )
}
