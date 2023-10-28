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
        {quizPage == 0 ?
        <>
            <p>Click Start to begin the quiz, you can exit at any time by clicking restart, but if you do you will lose all progress!
        <br></br> 
        <br></br> 
            The username you enter will be displayed on the leaderboards - so choose carefully!</p>  
            <div className='start-cont'>
                <input type="text" placeholder="Enter a username here..."></input> 
                <h2 className='start-button'>Start</h2> 
            </div>
        </>
    :
    <p>test</p>
}             
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
p,input{
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
.start-cont{
    margin-top: 30px;
    background: #f5efeb;
    border-radius: 20px;
    border: 5px solid #565c5e;
    padding: 20px;
    width: 50%;
    text-align: center;
}
input{
    background: white;
    margin-bottom: 15px;
}

@media only screen and (max-width: 650px) {
    h1{
        font-size: 20px;
        margin-top: 15px;
        border: 3px solid #565c5e;
        padding: 10px;
    }
    span{
        display: none;
    }
    p,input{
        font-size: 15px;
        margin-top: 10px;
        border-radius: 20px;
        padding: 15px;
        width: 70%;  
        border: 3px solid #565c5e;  
    }
    .start-button{
        font-size: 25px;
    }
    .start-cont{
        margin-top: 20px;
        border: 3px solid #565c5e;
        width: 70%;
        text-align: center;
    }
  
}
`



export default Quizpage;