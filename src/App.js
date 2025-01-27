import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Mainpage from "./components/Mainpage"
import Download from "./components/Download"
import Upload from './components/Upload';
import { extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <ChakraProvider>
     <Upload />
    </ChakraProvider>
    </>
  );
}

export default App;
