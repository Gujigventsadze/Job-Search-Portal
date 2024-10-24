import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/Preloader/Preloader';
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Footer/Footer';
import Aboutpage from './components/Aboutpage/Aboutpage';
import Jobpostingpage from './components/Jobpostingpage/Jobpostingpage';
import { JobsProvider } from './GlobalContext/Jobscontext';
import Vacancy from './components/Vacancy/Vacancy';


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  
    }, 4000);
    return () => clearTimeout(timer);
  }, []);


  return (
      <JobsProvider>
        <Router>
          {loading ? (
            <Preloader />
          ) : ""}
            <>
              <Navbar />
              <Routes>
                  <Route path='/' element={<Homepage />} />
                  <Route path='/about' element={<Aboutpage />} />
                  <Route path='/post-job' element={<Jobpostingpage />} />
                  <Route path='/jobs/:index' element={<Vacancy />} />
              </Routes>
              <Footer />
            </>
        </Router>
    </JobsProvider>
  );
}

export default App;
