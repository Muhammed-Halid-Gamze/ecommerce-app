import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ScissorsImage from "../../assets/Scissors.jpg"

const Products = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ScissorsImage}
          alt="scissors"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Scissors
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stainless Steel Product - It is Italian made
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Products