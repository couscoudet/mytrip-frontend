import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Authentification/Login'
import PasswordInitialisation from './pages/Authentification/PasswordInitialisation'
import Signup from './pages/Authentification/Signup'
import TripListPage from './pages/Trip/TripListPage'

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/password-init" element={<PasswordInitialisation />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/trips-list" element={<TripListPage />} />
    </Routes>
    </>
  )
}

export default App
