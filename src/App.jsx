import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenPage } from './pages/MenPage'
import {LandingPage} from './pages/LandingPage'

function App() {

  return (
    <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='hombre' element={<MenPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
