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
    
    <AppBar style={{backgroundColor:'#ec2427'}}>
        <Toolbar varient="dense">
       
        <h1 style={{textAlign:"center"}}>Sourcewiz - Powered by </h1>
        
        <img className="lol" height="128" width="128" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/awdk7ezzyz5mvycq38iy"/>
        
        </Toolbar>
    </AppBar>
    
    )
}