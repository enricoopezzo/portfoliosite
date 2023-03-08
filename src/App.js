import './App.css';
import { FooterContent } from './components/FooterContent';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';
import { Contacts } from './pages/Contacts';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/resume" element={ <Resume /> } />
        <Route path="/contacts" element={ <Contacts /> } />
      </Routes>
      <FooterContent />
    </BrowserRouter>
 
  );
}

export default App;
