
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Lostitm from './Pages/Lostitm';
import Founditm from './Pages/Founditm';
import Report from './Pages/Report';
import Profile from './Pages/Profile';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
function App() {

  useEffect(() => {
    document.body.classList.add("dark");
    return () => {
      document.body.classList.remove("dark");
    };
  }, []);
  return (
    <div>
      <ToastContainer />
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Lostitm" element={<Lostitm />} />
            <Route path="/Founditm" element={<Founditm />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
