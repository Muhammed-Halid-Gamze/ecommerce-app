import React from "react";
import { useParams } from "react-router-dom";
import myProductList from "../../components/myList.json";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { useBasket } from "../../contexts/BasketContext";
import { MyList } from "../Products/Products";
console.log(MyList);
const ProductList = JSON.parse(JSON.stringify(myProductList));
// console.log(ProductList);

const ProductDetail = () => {
  const { product_id } = useParams();
  const ViewProduct = ProductList[product_id];
  const { addToBasket, items } = useBasket();
  // console.log(ViewProduct);
  const findBasketItem = items.find((item) => item.id === product_id);

  return (
    <Box
      style={{
        alignItems: "center",
        textAlign: "center",
        justifyContent: "left",
        display: "flex",
        flex: "wrap",
        flexGrow: 1,
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <Box></Box>
        </Grid>
        <Grid item xs={10} sm={5} md={4} lg={3}>
          <Card
            sx={{
              maxWidth: 745,
              maxHeight: 500,
              justifyContent: "center",
              textAlign: "center",
              height: 500,
            }}
          >
            <CardMedia
              component="img"
              height="400"
              image={ViewProduct.imgUrl}
              alt={ViewProduct.name}
            />

            <CardActions style={{ justifyContent: "center" }}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {/* <Typography>

              <Button size="small" variant="contained">
                CHANGE TO PHOTO
              </Button>
              </Typography> */}
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5} md={6} lg={7}>
          <Card
            sx={{
              maxWidth: 745,
              justifyContent: "center",
              textAlign: "center",
              height: 500,
              maxHeight: 500,
            }}
          >
            <CardContent>
              <Typography variant="h4" component="div">
                {ViewProduct.name}
              </Typography>
              <Typography variant="h6" component="div">
                {ViewProduct.desc}
              </Typography>

              <Typography variant="h4" component="div">
                {ViewProduct.price}$
              </Typography>

              <Typography variant="h6" component="div">
                {ViewProduct.longDesc}
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="contained"
                onClick={() => addToBasket(ViewProduct, findBasketItem)}
                color= {findBasketItem ? "error" : "success"}
              >
                {
                findBasketItem ? "REMOVE FROM BASKET" : "ADD TO BASKET"
                }
                
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <Box></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
