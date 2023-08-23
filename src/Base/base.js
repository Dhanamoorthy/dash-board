import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import HandymanIcon from '@mui/icons-material/Handyman';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import BarChartIcon from '@mui/icons-material/BarChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Base() {
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
            <NavDropdown.Item href="#action/3.1" className='Dropdwn'style={{display:"grid"}} >Buttons</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"  className='Dropdwn' style={{display:"grid"}}>
              Cards
           </NavDropdown.Item>
          </NavDropdown>
          <br/>
          <NavDropdown title="Utilities"id="basic-nav-dropdown" style={{display:"grid"}}> 
            <span className='header'>CUSTOM UTILITIES:</span>
            <NavDropdown.Item href="#action/3.1" className='Dropdwn' style={{display:"grid"}}>Colours</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"  className='Dropdwn'style={{display:"grid"}}>
              Borders
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3" className='Dropdwn' style={{display:"grid"}}>
              Animations
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.4"  className='Dropdwn' style={{display:"grid"}}>
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
export default Base;
