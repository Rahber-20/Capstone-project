import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo_transparent.png'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {

    const navigate =useNavigate();
  return (
    <Container className='flex a-center j-between'>
        <div className="logo">
       <img src={logo} alt="logo" />
        </div>
        <button onClick={()=> navigate(props.login ? "/login" : "/signup")} >
            {props.login ? "Log In" : "Sign Up"}
        </button>
    </Container>
  )
}


const Container = styled.div`
  padding:2rem;

   .logo{
    img{
        height:5rem;
    }

   }
   button{
    padding:0.5rem 1rem;
    background-color:#e50914;
    border:none;
    cursor:pointer;
    border-radius:0.2rem;
    font-size:1.05rem;
    font-weight:bolder;
    color:white;
   }

`;

export default Header