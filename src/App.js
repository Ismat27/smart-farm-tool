import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyAccount from './pages/VerifyAccount';
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<Signup />}/>
        <Route path='login' element={<Login/>} />
        <Route path='verify-account' element={<VerifyAccount/>} />
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route index element={<h2>all is well</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
