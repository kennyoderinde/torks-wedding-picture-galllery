// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar'
import LandingPage from './pages/LandingPage/LandingPage.js';
import WeddingProgram from './pages/WeddingProgram/WeddingProgram.js';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact'

import PreWedding from './pages/PhotoGallery/PreWedding/PreWedding.js'
import Court from './pages/PhotoGallery/Court/Court.js'
import Engagement from './pages/PhotoGallery/Engagement/Engagement.js'

import './App.css';
import Reception from './pages/PhotoGallery/Reception/Reception.js';
import Wedding from './pages/PhotoGallery/Wedding/Wedding';
import PartiesAndShowers from './pages/PhotoGallery/PartiesShowers/PartiesShowers.js'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/wedding-program' element={<WeddingProgram />} />
        <Route path='/photo-gallery' element={<PhotoGallery/>}/>
        <Route path='/blog' element={<Blog/>}/>

        <Route path='/court' element={<Court/>}/>
        <Route path='/pre-wedding' element={<PreWedding />} />
        <Route path='/engagement' element={<Engagement/>}/>
        <Route path='/reception' element={<Reception/>}/>
        <Route path='/wedding' element={<Wedding/>}/>
        <Route path='/parties-and-showers' element={<PartiesAndShowers/>}/>

      </Routes>
    </div>
  );
}

export default App;
