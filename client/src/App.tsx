  import { Routes, Route } from 'react-router-dom';
  import React from 'react';
  import Home from './pages/Home.tsx';
  import About from './pages/About.tsx';
  import ChatRoom from './pages/ChatRoom.tsx';
  import Dashboard from './pages/Dashboard.tsx';
  import Discover from './pages/Discover.tsx';
  import EditProfile from './pages/EditProfile.tsx'
  import Login from './pages/Login.tsx';
  import Matches from './pages/Matches.tsx';
  import NotFound from './pages/NotFound.tsx';
  import Profile from './pages/Profile.tsx';
  import Signup from './pages/Signup.tsx'


function App() {
  return (
    <>
<h1>Hello, World!</h1>


      <Routes>
    <Route path = '/' element = {<Home />} />
    <Route path = '/About' element = {About />} />
    <Route path = 'ChatRoom' element = {ChatRoom />} />
    <Route path = '/Dashboard' element = {Dashboard />} />
    <Route path = '/Discover' element = {Discover />} />
    <Route path = '/EditProfile' element = {EditProfile />} />
    <Route path = '/Profile' element = {Profile />} />
    <Route path = '/SignUp' element = {Signup />} />
    <Route path = '/Login' element = {Login />} />
    <Route path = '/Matches' element = {Matches />} />
    <Route path = '/NotFound' element = {NotFound />} />
      </Routes>

    </>
  );
}

export default App;
