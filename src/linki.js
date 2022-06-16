import { Button, Checkbox, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, InputLabel, RadioGroup, TextField,Select, MenuItem, Grid,Box} from "@mui/material";
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
    const US_states = {
      "AL": "Alabama",
      "AK": "Alaska",
      "AZ": "Arizona",
      "AR": "Arkansas",
      "CA": "California",
      "CO": "Colorado",
      "CT": "Connecticut",
      "DE": "Delaware",
      "FL": "Florida",
      "GA": "Georgia",
      "HI": "Hawaii",
      "ID": "Idaho",
      "IL": "Illinois",
      "IN": "Indiana",
      "IA": "Iowa",
      "KS": "Kansas",
      "KY": "Kentucky",
      "LA": "Louisiana",
      "ME": "Maine",
      "MD": "Maryland",
      "MA": "Massachusetts",
      "MI": "Michigan",
      "MN": "Minnesota",
      "MS": "Mississippi",
      "MO": "Missouri",
      "MT": "Montana",
      "NE": "Nebraska",
      "NV": "Nevada",
      "NH": "New Hampshire",
      "NJ": "New Jersey",
      "NM": "New Mexico",
      "NY": "New York",
      "NC": "North Carolina",
      "ND": "North Dakota",
      "OH": "Ohio",
      "OK": "Oklahoma",
      "OR": "Oregon",
      "PA": "Pennsylvania",
      "RI": "Rhode Island",
      "SC": "South Carolina",
      "SD": "South Dakota",
      "TN": "Tennessee",
      "TX": "Texas",
      "UT": "Utah",
      "VT": "Vermont",
      "VA": "Virginia",
      "WA": "Washington",
      "WV": "West Virginia",
      "WI": "Wisconsin",
      "WY": "Wyoming"
    }

    const indian_states = {
      "AN":"Andaman and Nicobar Islands",
      "AP":"Andhra Pradesh",
      "AR":"Arunachal Pradesh",
      "AS":"Assam",
      "BR":"Bihar",
      "CG":"Chandigarh",
      "CH":"Chhattisgarh",
      "DN":"Dadra and Nagar Haveli",
      "DD":"Daman and Diu",
      "DL":"Delhi",
      "GA":"Goa",
      "GJ":"Gujarat",
      "HR":"Haryana",
      "HP":"Himachal Pradesh",
      "JK":"Jammu and Kashmir",
      "JH":"Jharkhand",
      "KA":"Karnataka",
      "KL":"Kerala",
      "LA":"Ladakh",
      "LD":"Lakshadweep",
      "MP":"Madhya Pradesh",
      "MH":"Maharashtra",
      "MN":"Manipur",
      "ML":"Meghalaya",
      "MZ":"Mizoram",
      "NL":"Nagaland",
      "OR":"Odisha",
      "PY":"Puducherry",
      "PB":"Punjab",
      "RJ":"Rajasthan",
      "SK":"Sikkim",
      "TN":"Tamil Nadu",
      "TS":"Telangana",
      "TR":"Tripura",
      "UP":"Uttar Pradesh",
      "UK":"Uttarakhand",
      "WB":"West Bengal"
  }

    function stateCheck(state,JSONlist) {
      for (const ctrystate in JSONlist) {
        if(JSONlist[ctrystate] === state)
          return true
      }
      return false
    }
    function submit_handler() {
      
        console.log(linki)
        console.log(github)
        console.log(sof)
        if(linki) {
        if (stateCheck(country,US_states))
            window.open(`https://www.google.com/search?q="${quary}" ${country} -intitle:"profiles" -inurl:"dir/ " site:www.linkedin.com/in/ OR site:www.linkedin.com/pub/ bachelor OR degree OR licence`)
        else
            window.open(`https://www.google.com/search?q="${quary}" ${country} -intitle:"profiles" -inurl:"dir/ " site:in.linkedin.com/in/ OR site:in.linkedin.com/pub/ bachelor OR degree OR licence`)
        }
        if (github)
            window.open(`https://github.com/search?&q=${quary} location:"${country},USA"&type=Users`)
        if (sof)
            window.open(`https://www.google.com/search?q=site:stackoverflow.com/users -"Keeping a low profile." "${quary}" "${country},USA"`)
        }
        
    let statelist = []

    for (const usstate in US_states) {
      statelist.push(<MenuItem value={US_states[usstate]}> <img src="/SourceWiz/usa.png" height={16} width={16}/>{US_states[usstate]},USA</MenuItem>)
    }
    for  (const instate in indian_states) {
      statelist.push(<MenuItem value={indian_states[instate]}>  <img src="/SourceWiz/india.png" height={16} width={16}/>{indian_states[instate]},India</MenuItem>)
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
           <Box
      sx={{
        width: 300,
        maxWidth: '100%',
      }}
    >
           <TextField fullWidth required label="Search for candidates?" variant="standard" onChange={(event) => setQuary(event.target.value)}/></Box>
           <br/>
           <h4>Websites:</h4>
  
  <FormControlLabel label="Stack Overflow" control={<Checkbox checked={sof} onChange={(event) => setSOF(event.target.checked)}/>}/>
  <FormControlLabel label="Github" control={<Checkbox checked={github} onChange={(event) => setGit(event.target.checked)}/>}/>
  <FormControlLabel label="Linkedin" control={<Checkbox checked={linki} onChange={(event) => setLinki(event.target.checked)}/>}/>
  <h3>Country?:</h3>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          onChange={(event) => ctry(event.target.value)}
          
        >
        {statelist}
        </Select>
<br/>
  <Button variant="contained" sx={{backgroundColor:"#000000"}} onClick={() => submit_handler()}>Submit!</Button>
</FormControl>

   
        </Grid>
    )
}