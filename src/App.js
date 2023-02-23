import './App.css';
import { FooterContent } from './components/FooterContent';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from './pages/Projects';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
      <FooterContent />
    </BrowserRouter>
 
  );
}

export default App;
