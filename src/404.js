import { Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
export default function Error() {
    let navi = useNavigate()
    function redirection() {
        
        navi("/recruit")
    }
    return (
    <>
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
    <br/>
    <br/>
    <br/>
        <Grid container direction="column" alignItems="center" justify="center">
            <h1>404 Not Found!</h1>

            <br/>
            <Button variant="contained" sx={{backgroundColor:"#FF0000"}} onClick={() => redirection()}>Go back to home page!</Button>
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
    <br/>
        </Grid>
        </>
    )
}