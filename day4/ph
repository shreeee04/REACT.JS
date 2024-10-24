import React, { useState } from 'react'
import { Dialog,DialogActions,DialogContentText,DialogTitle,DialogContent, Button, TextField } from '@mui/material'

const Loginpage=()=>{
    const[open,openchange]=useState(false);
    const Openpopup=()=>{
        openchange(true);
    }
    const Closepopup=()=>{
        openchange(false);
    }
    return(
        <div>
            <center>
                <h1 style={{color:"green"}}>Welcome to my Loginpage</h1>
            <Button onClick={Openpopup}variant='contained' color="secondary">Login</Button>
            <Dialog open={open} onClose={Closepopup}>
           <DialogTitle>Welcome to Login</DialogTitle>
           <DialogContent>
            
            <TextField label="User Name" type="text"></TextField>
            <br></br>
            <TextField label="password" type="password"></TextField>
           </DialogContent>
           <DialogActions>
            <Button onClick={Closepopup}variant='contained' color='success'>OK</Button>
            <Button onClick={Closepopup} variant='contained' color='error'>Close</Button>
           </DialogActions>
            </Dialog>
            </center>
        </div>
    )
}
export  default Loginpage
