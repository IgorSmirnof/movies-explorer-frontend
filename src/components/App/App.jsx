import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
// import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <CurrentUserContext.Provider value={{}}>
      <div className="app">
        <div >
          <Routes>
            <Route
              path='/'
              element={<Landing />}
            />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
