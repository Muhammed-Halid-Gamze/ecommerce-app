import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
      }}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={product.imgUrl}
            alt="scissors"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.desc}
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
              {product.price}$
            </Typography>
            <br />
          </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained">
              ADD TO CART
            </Button>
          </CardActions>
      </Link>
    </Card>
  );
};

export default ProductCard;
