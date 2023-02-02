import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import VHomePage from './components/home/Vhome';
import VRoomPage from './components/room/Vroom';
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import Signup from './components/Pages/Signup'
import About from './components/Pages/About'
import Class from './components/Pages/Class'
import Contact from './components/Pages/Contact'
import Dashbord from './components/Pages/Dashbord'
import Footer from './components/Pages/Footer'
import Lecture from './components/Pages/Lecture'
import Navbar from './components/Pages/Navbar'
import Services from './components/Pages/Services'
import Classhome from './Class/Classhome';
import Classroom from './Class/Classroom';
import { SocketProvider } from './Providers/Socket';
import { PeerProvider } from './Providers/Peer';
import './App.css'



function App() {

  return (
    <>
       <SocketProvider>
      <PeerProvider> 
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/class' element={<Class />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/dashbord' element={<Dashbord />} ></Route>
          <Route path='/lecture' element={<Lecture />} ></Route>
          <Route path='/services' element={<Services />} ></Route>
          <Route path='/vroom/:roomId' element={<VRoomPage />}></Route>
          <Route path='/vhome' element={<VHomePage />}></Route>
          <Route path='/classhome' element={<Classhome />} />
          <Route path='/classroom/:roomId' element={ <Classroom/>} />
        </Routes>
        <Footer />
      </Router>
      </PeerProvider>
      </SocketProvider>
    </>
  );
}

export default App;
