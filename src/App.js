
import './App.css';


import Login from './componenets/Login';
import Feedback from './componenets/Feedback';
import Reg from './componenets/Reg';
import Main from './componenets/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componenets/Home';
import About from './componenets/About';
import Contact from './componenets/Contact';
import Bollywood from './componenets/Bollywood';
import Hollywood from './componenets/Hollywood';
import Web from './componenets/Web';
import Local from './componenets/Local';
import Upload from './componenets/Upload';
import Videocard from './componenets/Videocard';

function App() {
  return (
  <>
   
<BrowserRouter>

<Routes>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/' element={<Reg/>}/>
  
  
  {/* second page */}
  <Route path='/main/' element={<Main/>}>
    
   <Route path='/main/' element={<Home/>}/>
   <Route path='feedback' element={<Feedback/>}/>
   <Route path='about' element={ <About/>}/>
   <Route path='contact' element={ <Contact/> }/>

   <Route path='bollywood' element={ <Bollywood/> } />

   <Route path='hollywood' element={ <Hollywood/> } />

   <Route path='web' element={ <Web/> } />

   <Route path='local' element={<Local/> } />

   <Route path='upload' element={<Upload/>}/>
    
  
  </Route>
  <Route path='/main/bollywood/videocard' element={ <Videocard/> }/>
  <Route path='/main/hollywood/videocard' element={ <Videocard/> }/>
  <Route path='/main/web/videocard' element={ <Videocard/> }/>
  <Route path='/main/local/videocard' element={ <Videocard/> }/>
</Routes>

</BrowserRouter>


   
   
   
   
   </>
  );
}

export default App;
