  import { Routes, Route } from 'react-router-dom';
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
  import Signup from './pages/Signup.tsx';
  import Button from './components/button.tsx';
  import Nav from './components/Navbar.tsx';
  import './assets/fonts/bonbon.css';


function App() {
  
  return (
    <>
     <Nav color={'periwinkle'} />
   
    
    
      <Routes>
    <Route path = '/' element = {<Home />} />
    <Route path = '/About' element = {<About />} />
    <Route path = 'ChatRoom' element = {<ChatRoom />} />
    <Route path = '/Dashboard' element = {<Dashboard />} />
    <Route path = '/Discover' element = {<Discover />} />
    <Route path = '/EditProfile' element = {<EditProfile />} />
    <Route path = '/Profile' element = {<Profile />} />
    <Route path = '/SignUp' element = {<Signup />} />
    <Route path = '/Login' element = {<Login />} />
    <Route path = '/Matches' element = {<Matches />} />
    <Route path = '/NotFound' element = {<NotFound />} />
    <Route path = '/button' element = {<Button color={ 'black' } children={undefined} />} />
      </Routes>

    </>
  );
}

export default App;
