import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import BlogsAndNews from './Components/Home/BlogsAndNews/BlogsAndNews';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<BlogsAndNews />} />
          <Route path='/buynow/:id' element={<PrivateRoute><ServiceDetails /></PrivateRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
