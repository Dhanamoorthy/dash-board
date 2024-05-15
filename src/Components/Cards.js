import { Box, Icon, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NotesIcon from '@mui/icons-material/Notes';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import {  Card,  CardContent, Grid } from '@mui/material'

const Cards = () => {
    
  const headingStyle ={
    color:"grey",
    fontsize:'20em'
   
  }
  const styles = {

    paper: {
        display: 'flex', // Make the content inside Paper flex
        alignItems: 'center', // Align content vertically to the center
        padding: '10px', // Add padding for spacing

    },
    iconContainer: {
        marginRight: '16px', // Add margin between the icon and text
    },
    values: {
        fontWeight: 'bold',
    },
    title: {
        color: 'gray'
    }
};
  return (
    <>
    <h3 style={headingStyle}>Cards</h3>
    <Box
    sx={{

        justifyContent: 'space-around',
        display: 'flex',
        flexWrap: 'wrap',

        '& > :not(style)': {
            m: 1,
            width: 248,
            height: 128,
        },
    }}
>
    <Paper style={styles.paper}>
    <div style={styles.iconContainer}>
        <Icon style={{
            width: '100px', height: '108px', color: 'green', backgroundColor: 'rgba(0, 128, 0, 0.1)',
            borderRadius: '60px'
        }} ><MonetizationOnOutlinedIcon style={{
            fontSize: '60px', marginTop: '21px'
        }} /></Icon> </div>
    <div>
        <Typography variant="caption" display="flex" flexWrap={'wrap'} gutterBottom style={styles.title}>
            Earning
        </Typography>
        <Typography variant="h5" gutterBottom style={styles.values}>
            $198k
        </Typography>
        <Typography variant="caption" display="flex" gutterBottom >
            <ArrowUpwardIcon style={{ color: 'green', fontSize: '15px' }} />37.8%this month
        </Typography>
    </div>
</Paper>
<Paper style={styles.paper}>
    <div style={styles.iconContainer}>
        <Icon style={{
            width: '100px', height: '108px', backgroundColor: 'rgba(138, 43, 226, 0.1)',
            borderRadius: '60px'
        }}><NotesIcon style={{
            fontSize: '60px', color: 'blueviolet', marginTop: '21px'
        }} /></Icon></div><div>
        <Typography variant="caption" display="block" gutterBottom style={styles.title}>
            Orders
        </Typography>
        <Typography variant="h5" gutterBottom style={styles.values}>
            $2.4k
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
            <ArrowDownwardIcon style={{ color: 'red', fontSize: '15px' }} />2% this Month
        </Typography>
    </div>
</Paper>
<Paper style={styles.paper}>
    <div style={styles.iconContainer}>
        <Icon style={{ width: '100px', height: '108px', backgroundColor: 'rgba(0, 0, 255, 0.1)', borderRadius: '60px' }}><AccountBalanceWalletIcon style={{
            fontSize: '60px', color: 'blue', marginTop: '21px'
        }} /></Icon></div><div>
        <Typography variant="caption" display="block" gutterBottom style={styles.title}>
            Balance
        </Typography>
        <Typography variant="h5" gutterBottom style={styles.values}>
            $2.4k
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
            <ArrowDownwardIcon style={{ color: 'red', fontSize: '15px' }} />2% this Month
        </Typography>
    </div>
</Paper>
<Paper style={styles.paper}>
    <div style={styles.iconContainer}>
        <Icon style={{ width: '100px', height: '108px', backgroundColor: 'rgba(255, 0, 0, 0.1)', borderRadius: '60px' }}><LocalMallIcon style={{
            fontSize: '60px', color: 'red', marginTop: '21px'
        }} /></Icon></div><div>
        <Typography variant="caption" display="block" gutterBottom style={styles.title}>
            Total Sales
        </Typography>
        <Typography variant="h5" gutterBottom style={styles.values}>
            $89k
        </Typography>
        <Typography variant="caption" display="block" gutterBottom >
            <ArrowUpwardIcon style={{ color: 'green', fontSize: '15px' }} />11% this Month
        </Typography>
    </div>
</Paper>
</Box>
<Grid container spacing={2}>
        <Grid item xs={6}>
          <Card style={{height:'250px',width:'40em'}}>
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
          <Card style={{height:'250px',width:'40em'}}>
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

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card style={{height:'250px',width:'40em'}}>
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
          <Card style={{height:'250px',width:'40em'}}>
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

export default Cards