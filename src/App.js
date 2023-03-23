import './App.css';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom'
import { MainContent } from './components/MainContent';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainContent />
    </BrowserRouter>
  );
}

export default App;
