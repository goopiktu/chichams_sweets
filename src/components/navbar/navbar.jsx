import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import cakeLogo from './navbar_assets/cake_icon.png'

function Navbar(){
        return(
                <nav class='navbar fixed-top navbar-expand-sm navbar-light bg-light'>
                        <div class='container'>
                        <a href='#' class='navbar-brand mb-0 h1'>
                                <img src={cakeLogo} class='d-inline-block align-top border border-primary rounded-circle' id='profile_image' width='30' height='30'/>
                        </a>

                        <button
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        class='navbar-toggler'
                        aria-bs-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        >
                                <span class='navbar-toggler-icon'></span>
                        </button>

                        <div class='collapse navbar-collapse justify-content-end' id='navbarNav'>
                                <ul class='navbar-nav ml-auto' id='navbar_options'>
                                       <li class='nav-item active'>
                                                <a href='#' class='nav-link active fw-bold'>
                                                       Home
                                                </a>
                                        </li>

                                        <li class='nav-item active'>
                                                <a href='#' class='nav-link active fw-bold'>
                                                       Order
                                                </a>
                                        </li>

                                        <li class='nav-item active'>
                                                <a href='#' class='nav-link active fw-bold'>
                                                       About Us
                                                </a>
                                        </li>

                                        <li class='nav-item active'>
                                                <a href='#' class='nav-link active fw-bold'>
                                                       Login
                                                </a>
                                        </li>
                                </ul>
                        </div>
                </div>
        </nav>
        );
}

export default Navbar;
