import React, { useState } from 'react'
import axios from 'axios'

const PostURL = 'http://localhost:9000/api/result'

export default function AppFunctional(props) {

  const [state, setState] = useState({
    coordinates: '',
    message: '', 
    board: ['', '', '', '', 'B', '', '', '', ''],
    emailInput: '',
    xCoordinate: 1,
    yCoordinate: 1
})

  const [count, setCount] = useState(0)

const getXY = (coordinates) => {
  if (state.board.indexOf('B') === 0) {return coordinates = "(1, 1)"}
  else if (state.board.indexOf('B') === 1) {return coordinates = "(2, 1)"}
  else if (state.board.indexOf('B') === 2) {return coordinates = "(3, 1)"}
  else if (state.board.indexOf('B') === 3) {return coordinates = "(1, 2)"}
  else if (state.board.indexOf('B') === 4) {return coordinates = "(2, 2)"}
  else if (state.board.indexOf('B') === 5) {return coordinates = "(3, 2)"}
  else if (state.board.indexOf('B') === 6) {return coordinates = "(1, 3)"}
  else if (state.board.indexOf('B') === 7) {return coordinates = "(2, 3)"}
  else if (state.board.indexOf('B') === 8) {return coordinates = "(3, 3)"}
} 

const updateY = () => {
  if (state.board.indexOf('B') === 0) {return 1}
  else if (state.board.indexOf('B') === 1) {return 1}
  else if (state.board.indexOf('B') === 2) {return 1}
  else if (state.board.indexOf('B') === 3) {return 2}
  else if (state.board.indexOf('B') === 4) {return 2}
  else if (state.board.indexOf('B') === 5) {return 2}
  else if (state.board.indexOf('B') === 6) {return 3}
  else if (state.board.indexOf('B') === 7) {return 3}
  else if (state.board.indexOf('B') === 8) {return 3}
}

const updateX = () => {
  if (state.board.indexOf('B') === 0) {return 1}
  else if (state.board.indexOf('B') === 1) {return 2}
  else if (state.board.indexOf('B') === 2) {return 3}
  else if (state.board.indexOf('B') === 3) {return 1}
  else if (state.board.indexOf('B') === 4) {return 2}
  else if (state.board.indexOf('B') === 5) {return 3}
  else if (state.board.indexOf('B') === 6) {return 1}
  else if (state.board.indexOf('B') === 7) {return 2}
  else if (state.board.indexOf('B') === 8) {return 3}
}

const reset = () => {
  setState({ 
    message: '', 
    board: ['', '', '', '', 'B', '', '', '', ''],
    emailInput: '',
    xCoordinate: 2,
    yCoordinate: 2
  })
  setCount(0)
}

const addToFrontOfArray = () => {
  const newBoard = [...state.board]
  newBoard.unshift(newBoard.pop())
  setState({
    ...state, 
    board: newBoard
  })
}

const addToBackOfArray = () => {
  const newBoard = [...state.board]
  newBoard.push(newBoard.shift())
  setState({
    ...state, 
    board: newBoard
  })
}

const moveBDownWithUnshiftAndPop = () => {
  const newBoard = [...state.board]
  newBoard.unshift(newBoard.pop(), newBoard.pop(), newBoard.pop())
  setState({...state, board: newBoard})
}

const moveBUpWithPushAndShift = () => {
  const newBoard = [...state.board]
  newBoard.push(newBoard.shift(), newBoard.shift(), newBoard.shift(),)
  setState({...state, board: newBoard})
}

const removeItemFromFrontOfArray = () => {
  setState({ board: state.board.slice(1)})
} 

const incrementTotalMoves = () => {
  setCount(count + 1)
}

const moveRight = () => {
  removeItemFromFrontOfArray()
  addToFrontOfArray()
  incrementTotalMoves()
}

const moveLeft = () => {
  removeItemFromFrontOfArray()
  addToBackOfArray()
  incrementTotalMoves()
}

const moveUp = () => {
  moveBUpWithPushAndShift()
  incrementTotalMoves()
} 

const moveDown = () => {
  moveBDownWithUnshiftAndPop()
  incrementTotalMoves()
} 

const handleRightClick = () => {
  const newMessage = "You can't go right"
  if (state.board.indexOf('B', 0) === 2) {return setState({...state, message: newMessage})}
  else if(state.board.indexOf('B', 0) === 5) {return setState({...state, message: newMessage})}
  else if(state.board.indexOf('B', 0) === 8) {return setState({...state, message: newMessage})}
  else {return moveRight()}
  
}

const handleLeftClick = () => {
  const newMessage = "You can't go left"
  if (state.board.indexOf('B', 0) === 0) {return setState({...state, message: newMessage})}
  else if(state.board.indexOf('B', 0) === 3) {return setState({...state, message: newMessage})}
  else if(state.board.indexOf('B', 0) === 6) {return setState({...state, message: newMessage})}
  else {return moveLeft()}
}

const handleUpClick = () => {
  const newMessage = "You can't go up"
  if (state.board.indexOf('B', 0) === 0) {return setState({...state, message: newMessage})}
  else if(state.board.indexOf('B', 0) === 1) {return setState({...state, message: newMessage})}
  else if(state.board.indexOf('B', 0) === 2) {return setState({...state, message: newMessage})}
  else {moveUp()}
}

const handleDownClick = () => {
  const newMessage = "You can't go down"
  if (state.board.indexOf('B', 0) === 6) {return setState({...state, message: newMessage})}
  else if(state.board.indexOf('B', 0) === 7) {return setState({...state, message: newMessage})}
  else if(state.board.indexOf('B', 0) === 8) {return setState({...state, message: newMessage})}
  else {return moveDown()}
}

const onChangeOfEmail = (evt) => {
  const newY = updateY()
  const newX = updateX()
  const { value } = evt.target
  setState({ ...state, emailInput: value,
    xCoordinate: newX,
    yCoordinate: newY
  })
}

const postNewEmail= () => {
  axios.post(PostURL,
     {x: state.xCoordinate,
      y: state.yCoordinate,
      steps: count,
      email: state.emailInput })
      .then(res => {
        console.log(res.data)
        setState({...state, message: res.data.message})
      })
      .catch(err => {
        console.log(err.message)
        setState({...state, message: err.response.data.message})
      })
} 

const onSubmit = (evt) => {
  evt.preventDefault()
  postNewEmail()
  reset()
  setState({...state, emailInput: ''})
}

  return (
    <div id="wrapper" className={props.className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates ${getXY(state.indexOfB)}`}</h3>
          <h3 id="steps">You moved {`${count}` == 1 ? `${count} ${'time'}`: `${count} ${'times'}`}</h3>
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
