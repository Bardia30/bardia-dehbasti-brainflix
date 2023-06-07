import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/HeaderComponents/Header';
import HomePage from './pages/HomePage';
import VideoDetailsPage from './pages/VideoDetailsPage';
import UploadPage from './pages/UploadPage';



function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Home/VideoDetailsPage/:videoId' element={<VideoDetailsPage />} />
          <Route path='/upload' element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
