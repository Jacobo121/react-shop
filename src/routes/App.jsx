/* imports */
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/*------------- pages --------------*/
import Layout from '../containers/Layout';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx'
import RecoveryPassword from '../pages/RecoveryPasswordEmail';
import RecoveryPasswordEmail from '../containers/RecoveryPasswordEmail';
import NewPassword from '../pages/NewPassword.jsx';
import MyAccount from '../pages/MyAccount.jsx';
import CreateAccount from '../pages/CreateAccount.jsx';
import Checkout from '../pages/Checkout.jsx';
import Orders from '../pages/Orders.jsx';
import NotFound from '../pages/NotFound';

/* -----------Styles --------------- */
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/recovery-password' element={<RecoveryPassword />}/>
                    <Route path='/recovery-password-email' element={<RecoveryPasswordEmail />}/>
                    <Route path='/new-password' element={<NewPassword />}/>
                    <Route path='/account' element={<MyAccount />}/>
                    <Route path='/signup' element={<CreateAccount />}/>
                    <Route path='/checkout' element={<Checkout />}/>
                    <Route path='/orders' element={<Orders />}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

