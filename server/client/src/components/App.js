import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PaymentsPage from '../pages/PaymentsPage';

const App = () => {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
        </Routes>
      </Router>
  )

}
export default App;
