import React from "react";
import { useBasket } from "../contexts/BasketContext";
import { Box, Typography, List } from "@mui/material";
import { textAlign } from "@mui/system";

const Basket = () => {
  const { items } = useBasket();
  const itemsInBasket = items.map((item) => <List>{item.name}</List>);
  console.log(itemsInBasket);
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#de413a",
          textAlign:"center"
        }}
      >
        YOUR PRODUCT IN THE BASKET
      </Typography>
      <List sx={{
          textAlign:"center"
      }}>{itemsInBasket}</List>
    </Box>
  );
};

export default Basket;
