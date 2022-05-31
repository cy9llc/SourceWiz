import { Button, Checkbox, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, InputLabel, RadioGroup, TextField,Select, MenuItem, Grid} from "@mui/material";
import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import { Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Linki() {
    
    const [quary,setQuary] = useState('')
    const [sof,setSOF] = useState(false)
    const [github,setGit] = useState(false)
    const [linki,setLinki] = useState(false)
    const [country,setCountry] = useState('')

    function ctry(word) {
        setCountry(word)
        console.log(word)
    }
    function submit_handler() {
    
        if(linki)
        console.log(country)
        if (country == "USA")
            window.open(`https://www.google.com/search?q="${quary}" "USA" -intitle:"profiles" -inurl:"dir/ " site:www.linkedin.com/in/ OR site:www.linkedin.com/pub/ bachelor OR degree OR licence`)
        else
            window.open(`https://www.google.com/search?q="${quary}" "India" -intitle:"profiles" -inurl:"dir/ " site:in.linkedin.com/in/ OR site:in.linkedin.com/pub/ bachelor OR degree OR licence`)
        if (github)
            window.open(`https://github.com/search?&q=${quary}&type=Users`)
        if (sof)
            window.open(`https://www.google.com/search?q=site:stackoverflow.com/users -"Keeping a low profile." "${quary}" "${country}"`)
        }
    return (
        <Grid container direction="column" alignItems="center" justify="center">
          
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>              
    <br/>
    <br/>
    <br/>
    
           <FormControl variant="standard">
           <TextField required label="Search for candidates?" variant="outlined" onChange={(event) => setQuary(event.target.value)}/>
           <br/>
           <h4>Websites:</h4>
  
  <FormControlLabel label="Stack Overflow" control={<Checkbox checked={sof} onChange={(event) => setSOF(event.target.checked)}/>}/>
  <FormControlLabel label="Github" control={<Checkbox checked={github} onChange={(event) => setGit(event.target.checked)}/>}/>
  <FormControlLabel label="Linkedin" control={<Checkbox checked={linki} onChange={(event) => setLinki(event.target.checked)}/>}/>
  
  <br/>
  <br></br>

  <h3>Country?:</h3>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={(event) => ctry(event.target.value)}
          
        >
          <MenuItem value="India">🇮🇳 India</MenuItem>
          <MenuItem value="USA">🇺🇸 United States</MenuItem>
          
        </Select>
  <Button variant="contained" sx={{backgroundColor:"#000000"}} onClick={() => submit_handler()}>Submit!</Button>
</FormControl>

        </Grid>
    )
}