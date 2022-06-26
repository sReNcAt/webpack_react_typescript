import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import MainPage from './MainPage'

import StoneApp from './StoneApp'
import CalcApp from './CalcApp'
import BiakissApp from './BiakissApp'
import BingoApp from './BingoApp'

import NotFound from './NotFound'

const App = () => {
    return (
        <Router>
            <Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/stone" element={<StoneApp />} />
				<Route path="/calc" element={<CalcApp />} />
				<Route path="/biakiss" element={<BiakissApp />} />
				<Route path="/bingo" element={<BingoApp />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
    );
};

export default App;