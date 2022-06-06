import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { Box,Typography} from "@mui/material";


const Profile = () => {
    const {user} = useAuth()
    const {items} = useBasket();
    console.log(user)
   
   



    return(
    <Box sx={{textAlign:"center"}}>
        <Typography variant="h4" >{`Hello ${user.name}`}</Typography>
        <br/>
        <Typography variant="h5" > Your user information is below </Typography>
        

        <br/> 
        <Typography variant="h6" >Username:{user.name}</Typography>
        <Typography variant="h6" >Email:{user.email}</Typography>
        <Typography variant="h6" >Password:{user.password}</Typography>
        <Typography variant="h6" >Gender:{user.gender}</Typography>
        <Typography variant="h6" >Items in the Basket:{items.length}</Typography>
        
        
       
        

    </Box>
    );
}

export default Profile;