import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Box,Typography, Button } from "@mui/material";

const Profile = ({history}) => {
    const {user, logout} = useAuth()
    console.log(user)
   

    const handleLogout = async() => {
        logout(() => {
            history.push("/")
            console.log(history.push)
            console.log("çalışıyor")
        })
    }

    return(
    <Box sx={{textAlign:"center"}}>
        <Typography variant="h4" >My Profile</Typography>

        <br/>
        <Typography variant="h6" >Username:{user.name}</Typography>
        <Typography variant="h6" >Email:{user.email}</Typography>
        <Typography variant="h6" >Password:{user.password}</Typography>
        <Typography variant="h6" >Gender:{user.gender}</Typography>
        
        
       <Button variant="contained" color="error" onClick={handleLogout} sx={{textAlign:"center", marginTop:10}}>Logout</Button>
        

    </Box>
    );
}

export default Profile;