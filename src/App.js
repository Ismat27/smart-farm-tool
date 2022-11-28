import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyAccount from './pages/VerifyAccount';
import DashboardLayout from './components/DashboardLayout';
import CoomingSoon from './components/CoomingSoon';
import PlantCare from './pages/PlantCare';
import LiveChat from './pages/LiveChat';
import Forum from './pages/Forum';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />}/>
        <Route path='login' element={<Login/>} />
        <Route path='verify-account' element={<VerifyAccount/>} />
        <Route element={<DashboardLayout />}>
          <Route path='dashboard' element={<PlantCare/>} />
          <Route path='plant-care' element={<PlantCare/>} />
          <Route path='live-chat' element={<LiveChat/>} />
          <Route path='logistics' element={<CoomingSoon/>} />
          <Route path='settings' element={<CoomingSoon/>} />
          <Route path='notifications' element={<CoomingSoon/>} />
          <Route path='forum' element={<Forum/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
