import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/style/style.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import FirstPage from './components/FirstPage';
import Register from './components/Register';
import SecondCompPage from './components/SecondCompPage';
import ChartEx from './components/ChartEx';
import Footer from './components/Footer';
import FirstCompPage from './components/FirstCompPage';
import {Element} from 'react-scroll';

const rounting = (
    <Router>
        <Navbar />
            <Route path="/" exact component={FirstPage} />
        
            
            <Route path='/register' component={Register} />
            <Route path='/login' component={LoginForm} />
            
    
    </Router>
)
ReactDOM.render(rounting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
