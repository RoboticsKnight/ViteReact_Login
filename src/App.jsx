import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NoPage from './Pages/NoPage/NoPage';


export default function App() {

  return (

    <div>

      <BrowserRouter>

        <Routes>

          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />

        </Routes>

      </BrowserRouter>

    </div>
    

  )


}
