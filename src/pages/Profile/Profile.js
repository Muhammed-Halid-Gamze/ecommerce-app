import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Typography } from "@mui/material";

const Profile = () => {
    const {user} = useAuth()
    console.log(user)

    return(
    <div>
        <Typography variant="h4" sx={{textAlign:"center"}}>My Profile</Typography>

        <br/>
        <Typography variant="h6" sx={{textAlign:"center"}}>Username:{user.name}</Typography>
        <Typography variant="h6" sx={{textAlign:"center"}}>Email:{user.email}</Typography>
        <Typography variant="h6" sx={{textAlign:"center"}}>Password:{user.password}</Typography>
        <Typography variant="h6" sx={{textAlign:"center"}}>Gender:{user.gender}</Typography>
        
        
       
        

    </div>
    );
}

export default Profile;