import React, { useEffect, useState } from 'react'
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
const App = () => {
  var [blog, setBlog] = useState ([])

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then((json) => setBlog(json))
  }, [])


  return (
    <div>
<br></br><br></br><br></br><br></br>
      <Typography variant="h4"> Blog Dashboard </Typography>
      <Table>
        <TableHead>
        <TableRow>
              <TableCell align="center" colSpan={2}>
              Blog Dashboard
              </TableCell>
             
            </TableRow>

          <TableRow>
            <TableCell> Id</TableCell>
            <TableCell> Title </TableCell>
            <TableCell> Description </TableCell>
          </TableRow>
        </TableHead>
        {blog.map((value,index) =>{
          return(
            <TableRow>
                <TableCell> {value.id} </TableCell>
                <TableCell> {value.title}</TableCell>
                <TableCell> {value.body}</TableCell>
            </TableRow>
          )
        })}

       <TableBody>



       </TableBody>
       <Button></Button>
      </Table>

    </div>
  )
}

export default App