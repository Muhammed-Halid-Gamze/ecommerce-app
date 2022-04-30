import React from "react";
import { useParams } from "react-router-dom";
import myProductList from "../../components/myList.json";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import { MyList } from "../Products/Products";
import { display } from "@mui/system";
console.log(MyList)
const ProductList = JSON.parse(JSON.stringify(myProductList));
console.log(ProductList);

const ProductDetail = () => {
  const { product_id } = useParams();
  const ViewProduct = ProductList[product_id];
  console.log(ViewProduct);

  return (
      <Box style={{alignItems:"center", textAlign:"center",justifyContent:"left", display:"flex"}}>

            <Card sx={{ 
                maxWidth: 745,
                justifyContent:"center",
                textAlign:"center"
            }}>
            <CardMedia
            component="img"
            height="360"
            image={ViewProduct.imgUrl}
            alt={ViewProduct.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h4" component="div">
            {ViewProduct.name}
            </Typography>
            
            <Typography gutterBottom variant="h5" component="div">
            {ViewProduct.price}$
            </Typography>
            </CardContent>
            <CardActions  style={{justifyContent:"center"}}>
            <Button size="small" variant="contained">ADD TO CART</Button>
            
            </CardActions>
        </Card>

      </Box>
  );
};

export default ProductDetail;
