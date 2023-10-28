import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function Quizpage(props) {
    let[quizPage, setQuizPage] = useState(0)

  return (
      <Container>
        <div className='header-cont'>
        <span class="material-symbols-outlined">school</span>
    <h1>Quiz Time!</h1>
    
    <span class="material-symbols-outlined">school</span>
    </div>

    <p>Click Start to begin the quiz, you can exit at any time by clicking restart, but if you do you will lose all progress!</p>   

    <p className='start-button'>Start</p>              
      </Container>
  );
}


const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
color:#565c5e;
font-weight: bold;
h1{
    font-size: 50px;
    margin-top: 30px;
    background: #f5efeb;
    border-radius: 20px;
    border: 5px solid #565c5e;
    padding: 20px;
}
p{
    font-size: 20px;
    margin-top: 30px;
    background: #f5efeb;
    border-radius: 20px;
    border: 5px solid #565c5e;
    padding: 20px;
    width: 50%;
    text-align: center;

}
span{
    font-size: 70px;
    margin: 0 10px;
    display: block;
    margin-top: 5%;
}
.start-button{
    cursor: pointer;
    font-size: 30px;
}
.header-cont{
    display: flex;
    align-items: center;
}
`



export default Quizpage;