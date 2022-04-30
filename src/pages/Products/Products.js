import React from "react";
import ProductCard from "../../components/Card/ProductCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Products = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {MyList.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard  product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

 export const MyList = [
  {
    id: "1",
    name: "Scissor",
    price: 60,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl: "https://m.media-amazon.com/images/I/31O-zrX4OdL._AC_SY1000_.jpg",
  },
  {
    id: "2",
    name: "Cake",
    price: 160,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://www.garipusta.com.tr/content/images/thumbs/0000314_nisan-dugun-pastasi-1.jpeg",
  },
  {
    id: "3",
    name: "Bride Gown",
    price: 760,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://cdn.essensedesigns.com/uploads/2020/11/1.S20-Essense.D3280LS-SS.jpg",
  },
  {
    id: "4",
    name: "Wedding Flower",
    price: 360,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://www.arabiaweddings.com/sites/default/files/styles/max750/public/albums/2018/06/20/colorful_bridal_bouquet_1.jpg?itok=Z0tX9vvl",
  },
  {
    id: "5",
    name: "Scissor",
    price: 60,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl: "https://m.media-amazon.com/images/I/31O-zrX4OdL._AC_SY1000_.jpg",
  },
  {
    id: "6",
    name: "Cake",
    price: 160,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://www.garipusta.com.tr/content/images/thumbs/0000314_nisan-dugun-pastasi-1.jpeg",
  },
  {
    id: "7",
    name: "Bride Gown",
    price: 760,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://cdn.essensedesigns.com/uploads/2020/11/1.S20-Essense.D3280LS-SS.jpg",
  },
  {
    id: "8",
    name: "Wedding Flower",
    price: 360,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://www.arabiaweddings.com/sites/default/files/styles/max750/public/albums/2018/06/20/colorful_bridal_bouquet_1.jpg?itok=Z0tX9vvl",
  },
  {
    id: "9",
    name: "Scissor",
    price: 60,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl: "https://m.media-amazon.com/images/I/31O-zrX4OdL._AC_SY1000_.jpg",
  },
  {
    id: "10",
    name: "Cake",
    price: 160,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://www.garipusta.com.tr/content/images/thumbs/0000314_nisan-dugun-pastasi-1.jpeg",
  },
  {
    id: "11",
    name: "Bride Gown",
    price: 760,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://cdn.essensedesigns.com/uploads/2020/11/1.S20-Essense.D3280LS-SS.jpg",
  },
  {
    id: "12",
    name: "Wedding Flower",
    price: 360,
    desc: "lorem ipsum doler sit upsetlsdflj",
    imgUrl:
      "https://www.arabiaweddings.com/sites/default/files/styles/max750/public/albums/2018/06/20/colorful_bridal_bouquet_1.jpg?itok=Z0tX9vvl",
  },
];

export default Products;
