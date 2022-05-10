import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Box,Typography} from "@mui/material";


const Profile = () => {
    const {user} = useAuth()
    console.log(user)
   
   



    return(
    <Box sx={{textAlign:"center"}}>
        <Typography variant="h4" >My Profile</Typography>

        <br/>
        <Typography variant="h6" >Username:{user.name}</Typography>
        <Typography variant="h6" >Email:{user.email}</Typography>
        <Typography variant="h6" >Password:{user.password}</Typography>
        <Typography variant="h6" >Gender:{user.gender}</Typography>
        
        
       
        

    </Box>
    );
}

export default Profile;