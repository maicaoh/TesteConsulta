import './App.css';
import './components/card/card.css';
import Header from './components/header/Header' ;
import { Gerenciar } from './pages/Gerenciar';
import { ContextProvider } from './context/context';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from './components/card/Card';

 
function App() {
  return (
  <>
  <ContextProvider>
    <Header/>
    <BrowserRouter>
            <Routes>
                <Route path="/new" exact element={<Gerenciar/>} />
                <Route path="/" exact element={<Card/>} />
            </Routes>        
        </BrowserRouter>
    </ContextProvider>
    </>
  );
}

export default App;
