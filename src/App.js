
import './App.css';
import { Base } from './Components/Base';

import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import Buttons from './Components/Buttons';
import Utilities from './Components/Utilities';
import Sbar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Cards from './Components/Cards';
import Colours from './Components/Colours';
import Borders from './Components/Borders';
import Animations from './Components/Animations';
import Others from './Components/Others';



function App() {
  
  return (
    <div className="App">
    
    
      <BrowserRouter>
      <Routes>
      {/* <Base/> */}
       <Route path='/' element={<Base/>}><Route path='/' element={<Dashboard/>}/>
        <Route path='/button' element={<Buttons/>}/> <Route path='/cards' element={<Cards/>}/>
        <Route path='/colours' element={<Colours/>}/><Route path='/borders' element={<Borders/>}/>
        <Route path='/animations' element={<Animations/>}/>
        <Route path='/others' element={<Others/>}/>
       <Route path='/utility' element={<Utilities/>}/></Route>
       
      
      </Routes>
      </BrowserRouter>
      
      
    
    </div>
  );
}
export default App;
