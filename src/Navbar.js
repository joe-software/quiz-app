import React from 'react';
import styled from 'styled-components'



function Navbar(props) {
    let display = props.toggleNavDisplay
     
  return (
      <Container >
        <div className='nav-header-cont' >
            <p><span  class="material-symbols-outlined">quiz</span></p>
            <p onClick={props.toggleNavDisplay}><span class="material-symbols-outlined menu-link">menu_open</span></p>
        </div>
        <div className='list-cont'>
            <p>Quiz</p>
            <p>Leaderboards</p>
        </div>
      </Container>
  );
}


const Container = styled.div`
padding: 15px 10px;
height: 100vh;

background: rgb(223,219,216);
background-image: url("/images/quiz_navbgr.png"); 
border-right: 5px solid #565c5e;

.list-cont{
    display: flex;
    flex-direction: column;
    
}
.nav-header-cont{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

p{
    font-weight: bold;
    font-size: 25px;
    color:#565c5e;
    cursor: pointer;
    margin: 15px 0px;
}
span{
    font-size: 60px;
    cursor: default;
    margin-bottom: 20px;
    margin: 0 10px;
}
.menu-link{
    cursor: pointer;
    background: #f5efeb;
    border-radius: 20px;
    border: 5px solid #565c5e;
}



`

export default Navbar;