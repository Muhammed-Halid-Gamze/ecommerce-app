import React from 'react'
import { useState, useContext, createContext, useEffect } from 'react'

const BasketContext = createContext();


const BasketProvider = ({children}) => {
    // const localBasket = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : null
    const [items, setItems] = useState([]);
    
    const addToBasket = (data, findBasketItem) => {
        if (!findBasketItem){

            return setItems((items) => [data, ...items]);
    }
    setItems( (prev) => [...prev, data]);
    const filtered = items.filter((item)=> item._id !== findBasketItem._id);
    setItems(filtered);

    // localStorage.setItem("basket", JSON.stringify(data))
};

const values = {
        items,
        setItems,
        addToBasket,
    };
    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
};

const useBasket = () => useContext(BasketContext);

export {useBasket, BasketProvider};
  