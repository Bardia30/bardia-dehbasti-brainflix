import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/HeaderComponents/Header';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';



function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:videoId' element={<HomePage />} />
          <Route path='/upload' element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
