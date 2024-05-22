import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpecialSessions from './pages/SpecialSessions';
import TravelVisa from './pages/TravelVisa';
import ComitteeMembers from './pages/ComitteeMembers';


function App() {
  return (
    <>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/SpecialSessions" element={<SpecialSessions/>}/>
            <Route path="/TravelVisa" element={<TravelVisa/>}/>
            <Route path="/ComitteeMembers" element={<ComitteeMembers/>}/>
          </Routes>
        </div>
      <Footer/>
    </>
  );
}

export default App;
  