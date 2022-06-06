import React from 'react'
import { useState, useContext, createContext, useEffect } from 'react'

const BasketContext = createContext();


const BasketProvider = ({children}) => {
    const [items, setItems] = useState([]);
    
    const addToBasket = (data) => {
        setItems((prev) => [...prev, data]);
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
  