import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Navbar from './Navbar';


function Maincomponent(props) {
// *** state and handler to toggle nav bar display ***
    let [navBarDisplay, setNavBarDisplay] = useState(true)
    function toggleNavDisplay(){
        setNavBarDisplay(!navBarDisplay)
    }
 
  return (
      <Container>
{/* handle the conditional rendering of the navbar */}
        {navBarDisplay ?
            <div className='navbar'>
            <Navbar  toggleNavDisplay={toggleNavDisplay} />
            </div>
        :
        <p onClick={toggleNavDisplay}><span class="material-symbols-outlined closed-menu-link">menu</span></p>

}
        <div>Placeholder</div>                   
      </Container>
  );
}


const Container = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;

.navbar{
    width: 20%;   
}

.closed-menu-link{
    font-weight: bold;
    color:#565c5e;
    margin: 25px 10px;
    font-size: 60px;
    cursor: pointer;
    background: #f5efeb;
    border-radius: 20px;
    border: 5px solid #565c5e;
}

`

// colour schemes #565c5e #dfdbd8


export default Maincomponent;