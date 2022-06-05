import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Grid } from "@mui/material";
import "./index.css"
const themer = createTheme ({
    palette: {
        primary: {
            main:'#ec2427'
        },
        secondary: {
            main:'#000000'
        }
    }
})
export default function Headbar() {
    return (
    
    <AppBar style={{backgroundColor:'#FFFFFF'}}>
        <Toolbar varient="dense">
        
        <img src="/cy9.png" width="140"/>
        <h1>&nbsp; &nbsp;</h1> 
        
        </Toolbar>
    </AppBar>
    
    )
}