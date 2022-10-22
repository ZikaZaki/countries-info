import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './redux/configureStore';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';

// Import Styling
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  // Get Countries from the API
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className={styles['App-header']}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        {/* <Route path="/continents/:id" element={<ContinentDetails />} /> */}
        {/* <Route path="/missions" element={<MissionTable />} /> */}
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
