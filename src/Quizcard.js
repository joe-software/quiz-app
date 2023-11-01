import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function Quizcard(props) {

  return (
      <Container>
        <p>{props.questions['question']}</p>

        <div className='question-cont'>
        <input type="radio" name="questionselect" onChange={props.handleCheck} value="1"></input>  
        <label>
            {props.questions['1']}
        </label>
        </div>

        <div className='question-cont'>
        <input type="radio" name="questionselect" onChange={props.handleCheck} value="2" ></input> 
        <label> 
            {props.questions['2']}
        </label>
        </div>

        <div className='question-cont'>
        <input type="radio" name="questionselect" onChange={props.handleCheck} value="3" ></input>  
        <label>
            {props.questions['3']}
        </label>
        </div>

        <div className='question-cont'>
        <input type="radio" name="questionselect" onChange={props.handleCheck} value="4" ></input>  
        <label>
            {props.questions['4']}
        </label>
        </div>

        <div className='nav-cont'>
        <p className="nav-p" onClick={props.resetPage}>Exit</p> 
            <p className="nav-p" onClick={props.nextPage}>Submit</p>  
        </div>
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

.question-cont{
    display:flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px;
    width: 25%;
  
}
input{
    margin: 0 20px;
    width: 1.15em;
    height: 1.15em;
}
label{
    font-size: 20px;
}
.nav-cont{
    width: 50%;
    display: flex;
}
.nav-p{
    margin: 0 20px;
    font-size: 15px;
    padding: 10px;
    margin-top: 30px;
}

`



export default Quizcard;