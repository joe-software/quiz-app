import React from 'react';
import styled from 'styled-components'
import background from './images/quiz_navbgr.png'



function Navbar(props) {
    let display = props.toggleNavDisplay
     
  return (
      <Container >
        <div className='nav-header-cont' >
        
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
background-image: url(${background}); 
background-size: cover;
background-size: 100% 100%;
border-right: 5px solid #565c5e;

.list-cont{
    display: flex;
    flex-direction: column;
    
}
.nav-header-cont{
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
    }
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
@media only screen and (max-width: 650px) {
    position: absolute;
    margin: 0;
    padding: 10px;
    border-right: 3px solid #565c5e;


    p{
        font-size: 020px;
        margin: 0px;
    }
    .menu-link{
        margin: 5px 0px;
        font-size: 35px;
        border-radius: 10px;
        border: 3px solid #565c5e;
    }  
    .list-cont{
        margin-top: 20px;
        p{
            margin: 10px 0px;
        }
    } 
  
}


`

export default Navbar;