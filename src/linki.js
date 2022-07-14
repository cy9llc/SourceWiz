import { Button, Checkbox,FormControl, FormControlLabel, InputLabel, RadioGroup, TextField,Select, MenuItem, Grid,Box} from "@mui/material";
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
    const [state,setState] = useState('')
    
    const [statelist,setStatelist] = useState([])

    const[beforeflag,setBeforeflag] = useState(false)
    const[afterflag,setAfterflag] = useState(false)
    const [beforedate,setBFDate] = useState('')
    const [afterdate,setAFDate] = useState('')
    function ctry(word) {
      setState('')
      setStatelist([])
        setCountry(word)
        console.log(word)
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
      const statel = []
      if (word == "USA") {
        console.log("US!")
      for (const usstate in US_states) {
        statel.push(<MenuItem value={US_states[usstate]}> <img src="/SourceWiz/usa.png" height={16} width={16}/>&nbsp;{US_states[usstate]},USA</MenuItem>)
      }
      }
      else
      {
      for  (const instate in indian_states) {
        statel.push(<MenuItem value={indian_states[instate]}>  <img src="/SourceWiz/india.png" height={16} width={16}/>&nbsp;{indian_states[instate]},India</MenuItem>)}
      
      }
      setStatelist(statel)
    }
    

    
    function submit_handler() {
      
        console.log(linki)
        console.log(github)
        console.log(sof)
        if(linki) {
        if (country === "USA") {
          let bfa = ``
          if(beforeflag)
            bfa += `before:${beforedate}`
          if (afterflag)
            bfa += `after:${afterdate}`
            
            window.open(`https://www.google.com/search?q="${quary}" ${state} -intitle:"profiles" -inurl:"dir/ " site:www.linkedin.com/in/ OR site:www.linkedin.com/pub/ bachelor OR degree OR licence ${bfa}`)
        }
        else
            window.open(`https://www.google.com/search?q="${quary}" ${state} -intitle:"profiles" -inurl:"dir/ " site:in.linkedin.com/in/ OR site:in.linkedin.com/pub/ bachelor OR degree OR licence`)
        }
        if (github)
            window.open(`https://github.com/search?&q=${quary} lo-cation:"${state},${country}"&type=Users`)
        if (sof)
            window.open(`https://www.google.com/search?q=site:stackoverflow.com/users -"Keeping a low profile." "${quary}" "${state},${country}"`)
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
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="India">India</MenuItem>
        </Select>
<br/>
<h3>State?:</h3>
 <Select
          labelId="state"
          id="state"
          value={state}
          onChange={(event) => setState(event.target.value)}
          
        >
        {statelist}
        </Select>
  <h3></h3>
  <FormControlLabel label="Before Option" control={<Checkbox checked={beforeflag} onChange={(event) => setBeforeflag(event.target.checked)}/>}/>
  <FormControlLabel label="After Option" control={<Checkbox checked={afterflag} onChange={(event) => setAfterflag(event.target.checked)}/>}/>
  <br></br>
  <h3>Before/After text:</h3>
  <br/>
  <TextField fullWidth required label="Before date?" variant="standard" onChange={(event) => setBFDate(event.target.value)}/>
  <br/>
  <TextField fullWidth required label="After date?" variant="standard" onChange={(event) => setAFDate(event.target.value)}/>
  <br/>
  <br/>
  <br/>
  <Button variant="contained" sx={{backgroundColor:"#000000"}} onClick={() => submit_handler()}>Submit!</Button>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  
  <h3 className="lol">&nbsp; &nbsp; &nbsp;Created By <a href="https://www.linkedin.com/in/anish-gorakavi-0a3390104/">Anish Gorakavi!</a></h3>
</FormControl>

        </Grid>
    )
}