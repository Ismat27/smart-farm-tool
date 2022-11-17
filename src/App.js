import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyAccount from './pages/VerifyAccount';
import DashboardLayout from './components/DashboardLayout';
// import PlantCareForm from './components/PlantCareForm';
import PlantCare from './pages/PlantCare';

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
          <Route path='live-chat' element={<PlantCare/>} />
          <Route path='logistics' element={<PlantCare/>} />
          <Route path='settings' element={<PlantCare/>} />
          <Route path='notifications' element={<PlantCare/>} />
          <Route path='forum' element={<PlantCare/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
