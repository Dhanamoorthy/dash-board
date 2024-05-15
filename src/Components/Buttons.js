import {  Card,  CardContent, Typography, Grid } from '@mui/material'
import React from 'react'

const Buttons = () => {

  const headingStyle ={
    color:"grey",
    fontsize:'20em'
   
  }

  return (
    <>
      <h3 style={headingStyle}>Buttons</h3>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card style={{height:'30em',width:'40em'}}>
            <CardContent>
              <h5>Circle Buttons</h5>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!

.btn-circle
    
.btn-circle .btn-sm
    
.btn-circle .btn-lg
    
              </Typography>
              <Typography variant="h5" component="div">
                {/* Add a primary button */}
               
              </Typography>
            </CardContent>
           
          </Card>
        </Grid>
        <Grid item xs={6}>
          {/* Add a card on the right side */}
          <Card style={{height:'30em',width:'40em'}}>
            <CardContent>
              <h5>Brand Buttons</h5>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.

You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.
              </Typography>
             
            </CardContent>
          
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Buttons