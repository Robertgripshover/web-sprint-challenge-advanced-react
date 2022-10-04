import React from 'react'
import axios from 'axios'

const PostURL = 'http://localhost:9000/api/result'

export default class AppClass extends React.Component {

  state = {
      coordinates: '',
      message: '', 
      board: ['', '', '', '', 'B', '', '', '', ''],
      totalMoves: 0,
      emailInput: '',
      xCoordinate: 1,
      yCoordinate: 1
  }


getXY = (coordinates) => {
  
  if (this.state.board.indexOf('B') === 0) {return coordinates = "(1, 1)"}
  else if (this.state.board.indexOf('B') === 1) {return coordinates = "(2, 1)"}
  else if (this.state.board.indexOf('B') === 2) {return coordinates = "(3, 1)"}
  else if (this.state.board.indexOf('B') === 3) {return coordinates = "(1, 2)"}
  else if (this.state.board.indexOf('B') === 4) {return coordinates = "(2, 2)"}
  else if (this.state.board.indexOf('B') === 5) {return coordinates = "(3, 2)"}
  else if (this.state.board.indexOf('B') === 6) {return coordinates = "(1, 3)"}
  else if (this.state.board.indexOf('B') === 7) {return coordinates = "(2, 3)"}
  else if (this.state.board.indexOf('B') === 8) {return coordinates = "(3, 3)"}
} 

updateX = (xCoordinate) => {
  if (this.state.coordinates === "(1, 1)") {return xCoordinate = 1}
  else if (this.state.coordinates === "(2, 1)") {return xCoordinate = 2}
  else if (this.state.coordinates === "(3, 1)") {return xCoordinate = 3}
  else if (this.state.coordinates === "(1, 2)") {return xCoordinate = 1}
  else if (this.state.coordinates === "(2, 2)") {return xCoordinate = 2}
  else if (this.state.coordinates === "(3, 2)") {return xCoordinate = 3}
  else if (this.state.coordinates === "(1, 3)") {return xCoordinate = 1}
  else if (this.state.coordinates === "(2, 3)") {return xCoordinate = 2}
  else if (this.state.coordinates === "(3, 3)") {return xCoordinate = 3}
}

updateY = (yCoordinate) => {
  if (this.state.coordinates === "(1, 1)") {return yCoordinate = 1}
  else if (this.state.coordinates === "(2, 1)") {return yCoordinate = 1}
  else if (this.state.coordinates === "(3, 1)") {return yCoordinate = 1}
  else if (this.state.coordinates === "(1, 2)") {return yCoordinate = 2}
  else if (this.state.coordinates === "(2, 2)") {return yCoordinate = 2}
  else if (this.state.coordinates === "(3, 2)") {return yCoordinate = 2}
  else if (this.state.coordinates === "(1, 3)") {return yCoordinate = 3}
  else if (this.state.coordinates === "(2, 3)") {return yCoordinate = 3}
  else if (this.state.coordinates === "(3, 3)") {return yCoordinate = 3}
}

  reset = () => {
    this.setState({
      indexOfB: 4,  
      message: '', 
      board: ['', '', '', '', 'B', '', '', '', ''],
      totalMoves: 0,
      emailInput: '',
      xCoordinate: 2,
      yCoordinate: 2
    })
  }

  addToFrontOfArray = () => {
    const newBoard = [...this.state.board]
    newBoard.unshift(newBoard.pop())
    this.setState({
      ...this.state, 
      board: newBoard
    })
  }

  addToBackOfArray = () => {
    const newBoard = [...this.state.board]
    newBoard.push(newBoard.shift())
    this.setState({
      ...this.state, 
      board: newBoard
    })
  }

  moveBDownWithUnshiftAndPop = () => {
    const newBoard = [...this.state.board]
    newBoard.unshift(newBoard.pop(), newBoard.pop(), newBoard.pop())
    this.setState({...this.state, board: newBoard})
  }

  moveBUpWithPushAndShift = () => {
    const newBoard = [...this.state.board]
    newBoard.push(newBoard.shift(), newBoard.shift(), newBoard.shift(),)
    this.setState({...this.state, board: newBoard})
  }

  removeItemFromFrontOfArray = () => {
    this.setState({ board: this.state.board.slice(1)})
  } 

  incrementTotalMoves = () => {
    this.setState({totalMoves: this.state.totalMoves + 1})
  }

  moveRight = () => {
    this.removeItemFromFrontOfArray()
    this.addToFrontOfArray()
    this.incrementTotalMoves()
    this.clearMovementMessage()
  }

  moveLeft = () => {
    this.removeItemFromFrontOfArray()
    this.addToBackOfArray()
    this.incrementTotalMoves()
    this.clearMovementMessage()
  }

  moveUp = () => {
    this.moveBUpWithPushAndShift()
    this.incrementTotalMoves()
    this.clearMovementMessage()
  } 

  moveDown = () => {
    this.moveBDownWithUnshiftAndPop()
    this.incrementTotalMoves()
    this.clearMovementMessage()
  } 

  //I need logic that will say, "if the 'message' part of state has the text
  //'cant go right','cant go left','cant go up','cant go down' 
  //THEN you can clear the 'message' the next time the button is clicked"

  clearMovementMessage = () => {
    const clearedMessage = ""
    if (this.state.message === "You can't go right") {return this.setState({...this.state, message: clearedMessage})}
    else if(this.state.message === "You can't go left") {return this.setState({...this.state, message: clearedMessage})}
    else if(this.state.message === "You can't go up") {return this.setState({...this.state, message: clearedMessage})}
    else if(this.state.message === "You can't go down") {return this.setState({...this.state, message: clearedMessage})}
    else if(this.state.message === "") {return this.setState({...this.state, message: clearedMessage})}
  }


  handleRightClick = () => {
    const newMessage = "You can't go right"
    if (this.state.board.indexOf('B', 0) === 2) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 5) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 8) {return this.setState({...this.state, message: newMessage})}
    else {return this.moveRight()}
    
  }

  handleLeftClick = () => {
    const newMessage = "You can't go left"
    if (this.state.board.indexOf('B', 0) === 0) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 3) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 6) {return this.setState({...this.state, message: newMessage})}
    else {return this.moveLeft()}
  }

  handleUpClick = () => {
    const newMessage = "You can't go up"
    if (this.state.board.indexOf('B', 0) === 0) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 1) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 2) {return this.setState({...this.state, message: newMessage})}
    else {this.moveUp()}
  }

  handleDownClick = () => {
    const newMessage = "You can't go down"
    if (this.state.board.indexOf('B', 0) === 6) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 7) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 8) {return this.setState({...this.state, message: newMessage})}
    else {return this.moveDown()}
  }

  onChangeOfEmail = (evt) => {
    const { value } = evt.target
    this.setState({ ...this.state, emailInput: value })
    this.updateX()
    this.updateY()
  }

postNewEmail= () => {
    axios.post(PostURL,
       {x: this.state.xCoordinate,
        y: this.state.yCoordinate,
        steps: this.state.totalMoves,
        email: this.state.emailInput })
        .then(res => {
          console.log(res.data)
          this.setState({...this.state, message: res.data.message})
        })
        .catch(err => {
          console.log(err)
          this.setState({...this.state, message: err.data.message})
        })
  } 

  onSubmit = (evt) => {
    evt.preventDefault()
    this.postNewEmail()
    this.reset()
    this.setState({...this.state, emailInput: ''})
  } 

  render() {

    const { className } = this.props
    const { totalMoves, board, indexOfB, message } = this.state

    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates ${this.getXY(indexOfB)}`}</h3>
          <h3 id="steps">You moved {totalMoves} times</h3>
        </div>

      <div id="grid">

          {
            board.map((val, idx) => {
              return (
                <div key={idx} className={`square${val ? ' active' : ''}`}>{val}</div>
              ) 
          })}

      </div>

        <div className="info">
          <h3 id="message">{message}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.handleLeftClick} id="left">LEFT</button>
          <button onClick={this.handleUpClick} id="up">UP</button>
          <button onClick={this.handleRightClick} id="right">RIGHT</button> 
          <button onClick={this.handleDownClick} id="down">DOWN</button>
          <button onClick={this.reset} id="reset">reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.emailInput} onChange={this.onChangeOfEmail} id="email" type="email" placeholder="type email"></input>  
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
