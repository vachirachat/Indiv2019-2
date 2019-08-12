import React from 'react';
import '../style/style.css';
import Link from 'react-router-dom';
import Logo from '../pic/Logo.png';
export default function Navbar() {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/" style={{marginLeft:'15%'}}><img src={Logo} style={{width:'40px'}}/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">เกี่ยวกับเรา <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ราคาการสอบ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>

                <a class='btn btn-outline-green' style={{marginLeft:'50%'}} href="/login">Login</a>
                </div>
            </nav>
        </div>
    )
}