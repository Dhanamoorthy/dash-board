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
    // <div className='left-component'>
    //    <ul className='nav-bar'>
    //     <a href='#' className='brand-name' >
    //       <div  ><SentimentVerySatisfiedIcon  ></SentimentVerySatisfiedIcon></div>
    //     </a >
    //     <div className='brand-name' id='brand'>SB ADMIN
    //     <sub className='power'>2</sub></div>
    //     <hr className='hr-line'/>

    //     <li className='nav-item' id='no-dot'>
    //       <DashboardIcon></DashboardIcon><span>Dashboard</span>
    //     </li>
    //     <hr className='hr-line'/>
        
    //     <div className='header'>INTERFACE</div>
    //     <li className='drop-btn' id='no-dot' >
    //        <SettingsIcon></SettingsIcon>
    //        <span >Components</span>
    //     </li>

    //     <div className='dropdwn-content' id='drop-items'>
    //       <h6  >CUSTOM COMPONENTS:</h6>
    //       <a href='#' className='content' >Buttons</a >
    //       <a href='#'  className='content'>Cards</a >
    //     </div>

    //     <li className='drop-btn' id='no-dot'>
    //       <HandymanIcon></HandymanIcon>
    //       <span>Utilities</span>
    //     </li>

    //     <div className='dropdwn-content'>
    //       <h6>CUSTOM UTILITIES:</h6>
    //       <a href='#'>Colors</a>
    //       <a href='#'>Borders</a >
    //       <a href='#'>Animations</a >
    //       <a href='#'>Others</a >
    //     </div>

    //     <hr className='hr-line'/>

    //     <div className='header'>ADD ONS</div>

    //     <li className='drop-btn' id='no-dot'> 
    //        <FolderOpenIcon></FolderOpenIcon>
    //        <span>Pages</span>
    //     </li>

    //     <div className='dropdwn-content'>
    //       <h6>LOGIN SCREENS:</h6>
    //       <a href='#'>Login</a >
    //       <a href='#'>Register</a >
    //       <a href='#'>Forget Password</a >

    //       <h6>OTHER PAGES:</h6>
    //       <a href='#'>404 Page</a>
    //       <a href='#'>Blank Page</a >
    //     </div>


    //     <li className='nav-item' id='no-dot'>
    //        <BarChartIcon></BarChartIcon>
    //        <a href='#'>Charts</a >
    //     </li>
        
    //     <li className='nav-item' id='no-dot' >
    //       <BackupTableIcon></BackupTableIcon>
    //       <a href='#'>Tables</a>
    //     </li>
    //    </ul>
        

        
    // </div>


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