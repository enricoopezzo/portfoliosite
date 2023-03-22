import './App.css';
import { FooterContent } from './components/FooterContent';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import { MainContent } from './components/MainContent';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainContent />
      <FooterContent />
    </BrowserRouter>
  );
}

export default App;
