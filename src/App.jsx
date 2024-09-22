import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenPage } from './pages/MenPage'
import { LandingPage } from './pages/LandingPage'
import { MenPageContextProvider } from './context/MenPageContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MediaPage } from './pages/MediaPage';

function App() {

  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='hombre' element={
            <MenPageContextProvider>
              <MenPage />
            </MenPageContextProvider>
          } />
          <Route path='media' element={<MediaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
