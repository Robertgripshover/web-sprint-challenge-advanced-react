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

//add THREE to the back of the array
// board.push('', '', '')
//add THREE to the front of the array
// board.unshift('', '', '')

//remove THREE from the front of the array
// board.splice(0, 3)
//remove THREE from the back of array
// board.splice(6, 3)

addThreeToFront = () => {
  const newBoard = [...this.state.board]
  newBoard.unshift('', '', '')
  this.setState({
    ...this.state, 
    board: newBoard
  })
}

removeThreeFromBack = () => {
  const newBoard = [...this.state.board]
  newBoard.splice(8, 3)
  this.setState({
    ...this.state, 
    board: newBoard
  })
}

moveBOverThree = () => {
  this.addThreeToFront(this.removeThreeFromBack())
}


getXY = (coordinates) => {
    if (this.state.board.indexOf('B') === 0) {return coordinates = "(1, 1)"}
    if (this.state.board.indexOf('B') === 1) {return coordinates = "(2, 1)"}
    if (this.state.board.indexOf('B') === 2) {return coordinates = "(3, 1)"}
    if (this.state.board.indexOf('B') === 3) {return coordinates = "(1, 2)"}
    if (this.state.board.indexOf('B') === 4) {return coordinates = "(2, 2)"}
    if (this.state.board.indexOf('B') === 5) {return coordinates = "(3, 2)"}
    if (this.state.board.indexOf('B') === 6) {return coordinates = "(1, 3)"}
    if (this.state.board.indexOf('B') === 7) {return coordinates = "(2, 3)"}
    if (this.state.board.indexOf('B') === 8) {return coordinates = "(3, 3)"}
} //WORKING PERFECTLY

updateX = (xCoordinate) => {
  if (this.state.coordinates === "(1, 1)") {return xCoordinate = 1}
  if (this.state.coordinates === "(2, 1)") {return xCoordinate = 2}
  if (this.state.coordinates === "(3, 1)") {return xCoordinate = 3}
  if (this.state.coordinates === "(1, 2)") {return xCoordinate = 1}
  if (this.state.coordinates === "(2, 2)") {return xCoordinate = 2}
  if (this.state.coordinates === "(3, 2)") {return xCoordinate = 3}
  if (this.state.coordinates === "(1, 3)") {return xCoordinate = 1}
  if (this.state.coordinates === "(2, 3)") {return xCoordinate = 2}
  if (this.state.coordinates === "(3, 3)") {return xCoordinate = 3}
}  //this part is not working yet, i checked with Postman and the 
//x and y coordinates are not updating with state, this is above updateXY() function is 
//not working yet, Tuesday 9-27-2022 7:00PM

updateY = (yCoordinate) => {
  if (this.state.coordinates === "(1, 1)") {return yCoordinate = 1}
  if (this.state.coordinates === "(2, 1)") {return yCoordinate = 1}
  if (this.state.coordinates === "(3, 1)") {return yCoordinate = 1}
  if (this.state.coordinates === "(1, 2)") {return yCoordinate = 2}
  if (this.state.coordinates === "(2, 2)") {return yCoordinate = 2}
  if (this.state.coordinates === "(3, 2)") {return yCoordinate = 2}
  if (this.state.coordinates === "(1, 3)") {return yCoordinate = 3}
  if (this.state.coordinates === "(2, 3)") {return yCoordinate = 3}
  if (this.state.coordinates === "(3, 3)") {return yCoordinate = 3}
}



  reset = () => {
    this.setState({
      indexOfB: 4,  
      message: '', 
      board: ['', '', '', '', 'B', '', '', '', ''],
      totalMoves: 0,
      emailInput: ''
    })
    console.log('resetting!')
  }//WORKING PERFECTLY

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

  addThreeToBeginningOfArray = () => {
    const newBoard = [...this.state.board]
    newBoard.unshift('', '', '')
    this.setState({...this.state, board: newBoard})
  }

  addThreeToBackOfArray = () => {
    const threeElementsArray = ['', '', '']
    const newBoard = [...this.state.board]
    newBoard.concat(threeElementsArray)
    this.setState({...this.state, board: newBoard})
  }

  removeThreeItemsFromFrontOfArray = () => {
    this.setState({ board: this.state.board.slice(3)})
  }

  removeItemFromFrontOfArray = () => {
    this.setState({ board: this.state.board.slice(1)})
  } 

  remove3ItemsFromBackOfArray = () => {
    const newBoard = [...this.state.board]
    newBoard.splice(6, 3)
    this.setState({ ...this.state, board: newBoard})
  } 

  add3ItemsToBackOfArray = () => {
    const newBoard = [...this.state.board]
    newBoard.push('', '', '')
    this.setState({...this.state, board: newBoard})
    console.log(newBoard)
  }

  moveRight = () => {
    this.removeItemFromFrontOfArray()
    this.addToFrontOfArray()
    this.incrementTotalMoves()
  }

  moveLeft = () => {
    this.removeItemFromFrontOfArray()
    this.addToBackOfArray()
    this.incrementTotalMoves()
  }

  moveUp = () => {
    this.removeThreeItemsFromFrontOfArray()
    this.incrementTotalMoves() 
  } 

  moveDown = () => {
    this.addThreeToFront()
    this.incrementTotalMoves()
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
    else {return this.moveUp()}
  }

  handleDownClick = () => {
    const newMessage = "You can't go down"
    if (this.state.board.indexOf('B', 0) === 6) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 7) {return this.setState({...this.state, message: newMessage})}
    else if(this.state.board.indexOf('B', 0) === 8) {return this.setState({...this.state, message: newMessage})}
    else {return this.moveDown()}
  }

  incrementTotalMoves = () => {
    this.setState({totalMoves: this.state.totalMoves + 1})
  }

  onChangeOfEmail = (evt) => {
    const { value } = evt.target
    this.setState({ ...this.state, emailInput: value })
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
        })
  } 

  onSubmit = (evt) => {
    evt.preventDefault()
    this.postNewEmail()
    this.setState({...this.state, emailInput: ''})
  } 

  render() {

    const { className } = this.props
    const { coordinates, totalMoves, board, indexOfB, message } = this.state

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
