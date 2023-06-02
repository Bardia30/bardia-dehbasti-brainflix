import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/HeaderComponents/Header';
import Main from './pages/Main';
import UploadPage from './pages/UploadPage';



function App() {
  return (
    <>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/upload' element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
