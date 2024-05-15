import React from 'react'
import { Box, Icon, Paper, Toolbar } from '@mui/material'
import Typography from '@mui/material/Typography';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NotesIcon from '@mui/icons-material/Notes';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { Chart } from './Chart';
import { RoundChart } from './RoundChart';
import { Tables } from './Table';
import { Outlet } from 'react-router-dom';
import { Search } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 200;

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

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
const Dashboard = () => {
  return (
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
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
        {/* <Dashboard/> */}
        <Outlet/>
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent='space-evenly' >
          <Chart   /> 
          <RoundChart /> {/* The second chart */}
        </Box>
        <Box>
          <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Product Sell
          
        </Typography>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
        <Tables/>
        </Box>
        </Box>
        </Box>
  )



  }

export default Dashboard;