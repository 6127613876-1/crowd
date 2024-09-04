import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Crw from './routes/crw'
import GetStarted from './routes/GetStarted';
import Tutorials from './routes/Tutorials';
import Wallets from './routes/Wallets';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Crw/>} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/wallets" element={<Wallets />} />
        </Routes>
                
    );
}

export default App;
