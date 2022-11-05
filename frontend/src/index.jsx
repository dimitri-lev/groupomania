import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
/* import Error from './components/Error'; */
import reportWebVitals from './reportWebVitals';
/* import { AuthContextProvider } from './store/authContext'; */

function Error() {
  return <div>Error 404</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <AuthContextProvider> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error />} />
        {/* </AuthContextProvider> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
