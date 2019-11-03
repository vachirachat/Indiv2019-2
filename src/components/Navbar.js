import React from 'react';
import '../style/style.css';
import Link from 'react-router-dom';
import Logo from '../pic/Logo.png';
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default function Navbar() {
    const scrollToElement = (elements) =>{
        console.log(elements);
        scroller.scrollTo(elements,{
            duration:1500,
            delay:100,
            smooth:true,
            offset: -150
        });
    }
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a id='logoNav' class="navbar-brand" href="/"><img src={Logo} style={{width:'40px'}}/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        
                    </ul>
                

                <a id='loginButton' class='btn btn-outline-green' href="/login" >Login</a>
                </div>
            </nav>
        </div>
    )
}