import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Crw from './routes/crw'
import GetStarted from './routes/GetStarted';
import Tutorials from './routes/Tutorials';
import Profile from './routes/Profile';
import About from './routes/About';
import Login from './routes/Login';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Crw/>} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
                
    );
}

export default App;
