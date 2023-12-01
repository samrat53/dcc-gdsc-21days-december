import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/AdminDashboard'
import UserDashBoard from './components/UserDashBoard'
import LandingPage from './components/LandingPage'


function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} ></Route>
      <Route path='/web' element={<LandingPage/>} ></Route>
      <Route path ='/admin' element={<AdminDashboard/>}></Route>
      <Route path ='/user' element={<UserDashBoard/>}></Route>
    </Routes>
  )
}

export default App

// .custom-bg-color {
//   background: #141e30; /* fallback for old browsers */
//   background: -webkit-linear-gradient(
//     315deg,
//     #243b55,
//     #141e30
//   ); /* Chrome 10-25, Safari 5.1-6 */
//   background: linear-gradient(
//     315deg,
//     #243b55,
//     #141e30
//   ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// }