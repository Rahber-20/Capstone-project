import React from 'react'
import styled from 'styled-components'
import bg from '../../assets/login.jpg'

const BgImage = () => {
  return (
    <Container>
        <img src={bg} alt="" />
    </Container>
  )
}
const Container = styled.div`
height:100vh;
width:100vw;
 img{
    height:100vh;
    width:100vw;
 }
`;
export default BgImage