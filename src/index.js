import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/style/style.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import FirstCompPage from './components/FirstCompPage';
import Register from './components/Register';
const rounting = (
    <Router>
        <Navbar />
        <div>
            <Route exact path='/' component={FirstCompPage} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={LoginForm} />
            
        </div>
    </Router>
)
ReactDOM.render(rounting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
