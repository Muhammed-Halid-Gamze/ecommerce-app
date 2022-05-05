import React from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Box,
  Typography,
  Grid,
  Button,
  Avatar,
  FormControlLabel,
  FormLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Checkbox,
  Paper,
  TextField,
  Link
} from "@mui/material";
import styles from "../SıgnUp/styles.module.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { red } from "@mui/material/colors";
import { color, width } from "@mui/system";

const buttonColor = red[700]

const SignIn = () => {
  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{
          height: "70vh",
          width: 340,
          margin: "20px auto",
          padding: 5,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            bgcolor: red[700],
            height: 70,
            width: 70,
            marginBottom: 3,
          }}
        >
          <LockOpenIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h3" >
          Sign In
        </Typography>

        <Box>
          <TextField
            sx={{ marginTop: 3}}
            label="Username"
            placeholder="Enter Username"
            color= "error"
            fullWidth
            required
          />
          <TextField
            sx={{ marginTop: 3 }}
            label="Password"
            placeholder="Enter Password"
            type="password"
            color= "error"
            fullWidth
            required
          />

          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: red[700],
                    "&.Mui-checked": {
                      color: red[700],
                    },
                  }}
                />
              }
              label="Remember Me"
            />
          </FormGroup>
          <Button type="submit" variant="contained" sx={{marginTop:3, bgcolor:red[700],  "&:hover":{bgcolor:red[700]}}} fullWidth>
            SIGN IN
          </Button>
          <Typography sx={{ marginTop: 1 }}> 
          <Link href="#" underline="none">
        Forgort Password ?
      </Link>
          </Typography>
          <Typography sx={{ marginTop: 1 }}> Do you have account?
          <Link href="#" underline="none">
          Sign In
      </Link>
          </Typography>
        </Box>
        
        
      </Paper>
    </Grid>
  );
};

export default SignIn;
