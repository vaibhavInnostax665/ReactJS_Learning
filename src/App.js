import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponetLearning from './pages/ComponetLearning';
import UseStateLearning from './pages/hooks/useStateLearning.jsx';
import UseRefLearning from './pages/hooks/UseRefLearning.jsx';
import UseEffectLearning from './pages/hooks/UseEffectLearning.jsx';
import Home from './pages/Home.jsx';
import Navigation from './layout/Navigation.jsx';



function App() {

  return (
    <div>
      
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/component' element={<ComponetLearning/>} />
      <Route path='/useState' element={<UseStateLearning/>} />
      <Route path='/useEffect' element={<UseEffectLearning/>} />
      <Route path='/useRef' element={<UseRefLearning/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
