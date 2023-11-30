import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/AdminDashboard'
import UserDashBoard from './components/UserDashBoard'


function App() {

  return (
    <Routes>
      <Route path ='/admin' element={<AdminDashboard/>}></Route>
      <Route path ='/user' element={<UserDashBoard/>}></Route>
    </Routes>
  )
}

export default App
