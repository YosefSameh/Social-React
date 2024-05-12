import { Component, useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementbypayload } from './redux/create-slice';
import Nav from './componates/Nav';
import SectionLeft from './componates/SectionLeft';
import AddPost from './componates/AddPost';
import Posts from './componates/Posts';
import ProfilePage from './componates/ProfilePage';
import AllComd from './componates/AllComponates';
import PageAuth from './componates/PageAuth';
import Login from './componates/PageAuth';
import Rigster from './componates/Rigster';
// import Profile from './ProjectOld/Profile.js';
// import LogIn from './ProjectOld/LogIn.js';
// import { fetchPosts } from './redux/showPosts.js';
// import Cards from './ProjectOld/Card.js';
// import Nav from './ProjectOld/Nav.js';






function App() {

  
  {/* <Route path="/" element={<Cards/>} />  */}
  {/* <Route path="logIn" element={<LogIn/>} />  */}
  {/* <Route path="Regstier" element={<Register/>} />  */}
  
    //     <div className='container' >
    //   <div style={{display: "-webkit-box"}}>
    //   <SectionLeft/>
    //   <div  className='d-flex flex-column' style={{marginLeft:40}}>
    //   <AddPost/>
    //   <Posts/>  
    //   </div>
    //   </div>
    // </div>

  return (
    <div className="App">
      <Nav/>
      <Routes>
         
        <Route path="/" element={<AllComd/>} /> 
        <Route path="Profile" element={<ProfilePage/>} /> 
        <Route path="login" element={<Login/>} /> 
        <Route path="rigster" element={<Rigster/>} /> 
      </Routes> 
    </div>
  );
  {/* <div className='container' >
  <div style={{display: "-webkit-box"}}>
  <SectionLeft/>
  <div  className='d-flex flex-column' style={{marginLeft:40}}>
  <AddPost/>
  <Posts/>  
  </div>
  </div>
</div> */}
}

export default App;
























    // const state = useSelector(state  => state)
    // console.log(state,"stgate");
    // const dispatch = useDispatch()
    // =====
    {/* <p>your manye in accoutn : {state.bank.value}</p>
    <button onClick={()=>dispatch(increment(100))}>dicrement</button>
    <button onClick={()=>dispatch(decrement(100))}>withDrow</button>
    <button onClick={()=>dispatch(incrementbypayload(800))}>witblus 800</button> */}