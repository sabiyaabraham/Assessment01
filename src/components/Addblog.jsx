import { Typography,TextField,Button } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div><br></br><br></br>
<Typography variant="h4" style={{ color: "black" }}><br></br><br></br>
      Create Your BLog From
</Typography>
      <br></br>
      <TextField
        label="BLog Name"
        name="name"
        id="name"
       
        variant="outlined"
      >
       
      </TextField>
      <br></br>
      <br></br>
      <TextField
        label="Description"
        name="des"
        id="desc"
        
        variant="outlined"
      >

      </TextField>
      <br></br><br></br>
      <TextField
        label="Author name"
        name="Author"
        id="auth"
        
        variant="outlined"
      >
        
      </TextField>
      <br></br>
      <br></br>
      <Button variant="contained"  color="success">
        Submit
      </Button>

        
    </div>
  )
}

export default Addblog