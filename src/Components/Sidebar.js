import React, { useState } from 'react'
// import Dashboard from './Dashboard'

import DashboardIcon from '@mui/icons-material/Dashboard';

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import BarChartIcon from '@mui/icons-material/BarChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
// import { useHistory } from 'react-router-dom';
// import { createBrowserHistory } from 'history';





const Sbar = () => {
  // const history1 = createBrowserHistory();
  // const history2 = createBrowserHistory();
  // const history = useHistory();

// function handleClick(){
 
//   if (history) {
//     history.push('/button');
//   } else {
//     console.error("History object is undefined");
//   }
// }
const navigate = useNavigate();

function handleClick(path){
  navigate(path)
}

  return (
   
  
 
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='brand-name'><SentimentVerySatisfiedIcon className='img'></SentimentVerySatisfiedIcon><div>SB ADMIN</div><sub>2</sub></Navbar.Brand>
          <NavDropdown.Divider  className='divider'/>
          
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='nav-item'> <DashboardIcon></DashboardIcon><span>Dashboard</span></Nav.Link>
              
              <NavDropdown.Divider  className='divider' />
              <Nav.Link href="#link" className='Header'>INTERFACE</Nav.Link>
              
              <br/>
              <NavDropdown title="Components"id="basic-nav-dropdown" style={{display:"grid"}}> 
      
                <span className='header'>CUSTOM COMPONENTS:</span>
                <NavDropdown.Item  className='Dropdwn'style={{display:"grid"}} onClick={()=>{handleClick("/button")}} >Buttons</NavDropdown.Item>
                <NavDropdown.Item className='Dropdwn' style={{display:"grid"}}  onClick={()=>{handleClick("/cards")}} >
                  Cards
               </NavDropdown.Item>
              </NavDropdown>
              <br/>
              <NavDropdown title="Utilities"id="basic-nav-dropdown" style={{display:"grid"}}> 
                <span className='header'>CUSTOM UTILITIES:</span>
                <NavDropdown.Item  className='Dropdwn' style={{display:"grid"}}onClick={()=>{handleClick("/colours")}} >Colours</NavDropdown.Item>
                <NavDropdown.Item  className='Dropdwn'style={{display:"grid"}}onClick={()=>{handleClick("/borders")}} >
                  Borders
               </NavDropdown.Item>
               <NavDropdown.Item className='Dropdwn' style={{display:"grid"}}onClick={()=>{handleClick("/animations")}} >
                  Animations
               </NavDropdown.Item>
               <NavDropdown.Item   className='Dropdwn' style={{display:"grid"}}onClick={()=>{handleClick("/others")}} >
                  Others
               </NavDropdown.Item>
                </NavDropdown>
                <br/>
               <NavDropdown.Divider   className='divider' />
       
               <Nav.Link href="#link" className='Header'>ADD ONS</Nav.Link>
               <br/>
              <NavDropdown title="Pages"id="basic-nav-dropdown" style={{display:"grid"}}> 
                <span className='header'>LOGIN SCREENS:</span>
                <NavDropdown.Item href="#action/3.1"className='Dropdwn'  style={{display:"grid"}}>Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className='Dropdwn'  style={{display:"grid"}}>
                  Register
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2" style={{display:"grid"}} className='Dropdwn' >
                  Forget Password
               </NavDropdown.Item>
              
              
               
              <span className='header'>OTHER PAGES:</span>
                <NavDropdown.Item href="#action/3.1" className='Dropdwn' style={{display:"grid"}}>404 Page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"  className='Dropdwn'style={{display:"grid"}}>
                  Blank Page
               </NavDropdown.Item>
               </NavDropdown>
                <br/>
                  <li className='nav-item' id='no-dot'>
                       <BarChartIcon></BarChartIcon>
                         <a href='#' className='nav-item'>Charts</a >
                    </li>
                   <br/>
                  <li className='nav-item' id='no-dot' >
                        <BackupTableIcon></BackupTableIcon>
                          <a href='#' className='nav-item'>Tables</a>
                      </li>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
  
}

export default Sbar