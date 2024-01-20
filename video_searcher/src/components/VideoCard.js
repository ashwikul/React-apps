import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function VideoCard(props) {
  const { url = "", name = "", date = "", category = "" } = props;
  return <Card sx={{ maxWidth: 345 }} mr={1}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={url}
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
}