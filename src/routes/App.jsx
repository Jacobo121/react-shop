import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login.jsx'
import RecoveryPasswordEmail from '../containers/RecoveryPasswordEmail';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/recovery-password' element={<RecoveryPasswordEmail />}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

