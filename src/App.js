// import logo from './logo.svg';
import './App.css';
// import MapComponent from './Pages/MapComponent';
import 'leaflet/dist/leaflet.css';
import {Routes,Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './Navbar/TopNavbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div>
     {/* <MapComponent /> */}
    
      <TopNavbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />}/>
      </Routes>

     
     
    </div>
  );
}

export default App;
