import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Quizcard from './Quizcard';

function Quizpage(props) {
    let [username, setUsername] = useState("")
    function changeUsername(e){
        setUsername(e.target.value)
    }
    let[quizPage, setQuizPage] = useState(0)
    function nextPage(){
        setQuizPage(quizPage + 1)
    }
    function resetPage(){
        setQuizPage(0)
    }

    let [checkState, setCheckState] = useState({0: "", 1: "", 2: "", 3: ""})
    function handleCheck(e){
        let page = quizPage
        setCheckState({...checkState, [quizPage]: e.target.value})
        console.log(checkState)
    }

let questions = [
    {'question': 'Which is the most commonly used port for HTTPS?', '1': '456', '2': '443', '3': '871', '4': '746'},
    {'question': 'Which is the most commonly used port for SSH/Secure Shell?', '1': '19', '2': '443', '3': '22', '4': '25'},
    {'question': 'Which is the most commonly used port for Telnet?', '1': '23', '2': '35', '3': '32', '4': '15'},
    {'question': 'Which is the most commonly used port for HTTP?', '1': '23', '2': '81', '3': '75', '4': '80'},
    {'question': 'Which is the most commonly used port for SMB?', '1': '443', '2': '445', '3': '450', '4': '322'},
    {'question': 'Which is the most commonly used port for DNS?', '1': '50', '2': '53', '3': '40', '4': '60'},
    {'question': 'Which is the most commonly used port for IMAP?', '1': '150', '2': '140', '3': '143', '4': '301'},
    {'question': 'Which is the most commonly used port for RDP?', '1': '3399', '2': '3389', '3': '3333', '4': '3800'}
]
let [score, setScore] = useState(0)
useEffect(() => {
    let counter = 0
    if(checkState[1] == "2"){
        counter ++
    }
    if(checkState[2] == "3"){
        counter ++
    }
    if(checkState[3] == "1"){
        counter ++
    }
    if(checkState[4] == "4"){
        counter ++
    }
    if(checkState[5] == "2"){
        counter ++
    }
    if(checkState[6] == "2"){
        counter ++
    }
    if(checkState[7] == "3"){
        counter ++
    }
    if(checkState[8] == "2"){
        counter ++
    }
    setScore((100/8) * counter)
   
}, [checkState])



  return (
      <Container>
        <div className='header-cont'>
            <span class="material-symbols-outlined">school</span>
            <h1>Quiz Time!</h1>
            <span class="material-symbols-outlined">school</span>
        </div>

        {quizPage < 1 &&
        <>
            <p>Click Start to begin the quiz, you can exit at any time by clicking restart, but if you do you will lose all progress!
        <br></br> 
        <br></br> 
            The username you enter will be displayed on the leaderboards - so choose carefully!</p>  
            <div className='start-cont'>
                <input type="text" placeholder="Enter a username here..." onChange={changeUsername} value={username}></input> 
                <h2 className='start-button' onClick={nextPage}>Start</h2> 
            </div>
        </>
        }  

        {(quizPage > 0 && quizPage < 9) &&
    <Quizcard quizPage={quizPage} nextPage={nextPage} handleCheck={handleCheck} questions={questions[quizPage-1]} resetPage={resetPage}/> }     

        {(quizPage == 9) &&
        <>
            <p>End Of Quiz!</p>
            <p>{username} - your score was... {score}</p>
            <div className='start-cont'>
                <h2 className='start-button' onClick={resetPage}>Reset</h2> 
            </div>
            
        </>
    
    
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