import React, {useState} from 'react'
import axios from 'axios'



export default function AppFunctional(props) {


  
  return (
    <div id="wrapper" className={props.className}>
 <div className="info">
          <h3 id="coordinates">{`Coordinates ${getXY()}`}</h3>
          <h3 id="steps">You moved {state.totalMoves} times</h3>
        </div>

      <div id="grid">

          {
            state.board.map((val, idx) => {
              return (
                <div key={idx} className={`square${val ? ' active' : ''}`}>{val}</div>
              ) 
          })}

      </div>

        <div className="info">
          <h3 id="message">{state.message}</h3>
        </div>
        <div id="keypad">
          <button onClick={handleLeftClick} id="left">LEFT</button>
          <button onClick={handleUpClick} id="up">UP</button>
          <button onClick={handleRightClick} id="right">RIGHT</button> 
          <button onClick={handleDownClick} id="down">DOWN</button>
          <button onClick={reset} id="reset">reset</button>
        </div>
        <form onSubmit={onSubmit}>
          <input value={state.emailInput} onChange={onChangeOfEmail} id="email" type="email" placeholder="type email"></input>  
          <input id="submit" type="submit"></input>
        </form>
    </div>
  )
}
