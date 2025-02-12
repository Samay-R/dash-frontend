import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.css';


const Mainpage = lazy(() => import('./components/Mainpage'));
const Download = lazy(() => import('./components/Download'));
const Upload = lazy(() => import('./components/Upload'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const SlidingReveal = lazy(() => import('./components/sliding-reveal'));


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SlidingReveal />} />
            <Route path="/download" element={<Download  />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;
