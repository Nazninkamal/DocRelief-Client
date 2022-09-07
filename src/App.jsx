import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';


function App() {
  return (
    <div className='App'>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="home" element={<Home />} />
       <Route path="appoinment" element={<PrivateRoute><Appoinment/></PrivateRoute>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="register" element={<Register/>}/>
      
                              {/* dashboard routes start */}
       <Route path="dashboard" element={<PrivateRoute><Dashboard/> </PrivateRoute>}>
            <Route  path="dashboardHome" element={<DashboardHome/>}/>
            <Route  path="makeAdmin" element={<MakeAdmin/>}/>
            <Route  path="addDoctor" element={<AddDoctor/>}/>
           
            
       </Route>

      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
