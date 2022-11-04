import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import TopNav from './components/topNav';
import Home from './pages/home';
import AboutUs from './pages/aboutus';


function App() {
  return (
    <Router>
    <TopNav />
    <Navbar />
    <Routes>
       <Route  path='/' exact element={<Home />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        {/* <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/giving' element={<Giving />} />
        <Route path='/about-us' element={<AboutUs />} />
    
        <Route path='/article' element={<Article />} />  */}
        
    </Routes>
    </Router>
  );
}

export default App;
