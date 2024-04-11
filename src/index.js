import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Langing from './pages/langing';
import "./pages/app.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

function Ppp(){
       
    const [User,setusername]=useState([
           {
               name:"mini",
               password:"123"
           },
           {
                  name:"mi",
                  password:"1"
              }
   
       ])
       console.log(User)
    
    return(<>       
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Login User={User} setusername={setusername}></Login>}></Route>
      <Route path='/signup' element={<Signup User={User} setusername={setusername}/>}></Route>
  <Route path='/langing' element={<Langing/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

    )
}

root.render(
    <div >
       
    <Ppp/>
    </div>
);

