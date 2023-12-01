import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/AdminDashboard'
import UserDashBoard from './components/UserDashBoard'
import LeaderBoard from './components/LeaderBoard'


function App() {

  return (
    <Routes>
      <Route path='/leaderboard' element={<LeaderBoard/>} ></Route>
      <Route path ='/admin' element={<AdminDashboard/>}></Route>
      <Route path ='/user' element={<UserDashBoard/>}></Route>
    </Routes>
  )
}

export default App