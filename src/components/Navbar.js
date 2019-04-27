import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import{ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-light px-sm-5">
           <Link to='/'>
           <img src={logo} alt="store" className="navbar-brand"/>
           </Link>
           <ul className="navbar-nav align-items-center">
           <li className="nav-item ml-5">
             <Link to="/" className="nav-link">          
            Products
             </Link>
               </li>
               
           </ul>
           <Link to="cart" className="ml-auto">
            <ButtonContainer>
                <span className="mr-2">
                <img src="./img/yoda.JPG" alt="yoda" />
                </span>
                  Your Cart Young Jedi!
            </ButtonContainer>
           </Link>
           </NavWrapper>

        );
    }
}

const NavWrapper = styled.nav`
.nav-link {
    color: var(--lightWhite) !important;
    font-size: 2.6rem;
}
`;
