import React from 'react'
import axios from 'axios'

const PostURL = 'http://localhost:9000/api/result'

export default class AppClass extends React.Component {

  state = {
      indexOfB: 0, 
      coordinates: '',
      message: '', 
      board: ['', '', '', '', 'B', '', '', '', ''],
      totalMoves: 0,
      direction: '',
      emailInput: '',
      xCoordinate: 2,
      yCoordinate: 1
  }

  getIndexOfB = (board) => {
    let indexOfTheB = board.indexOf(0, 'B')
    console.log(indexOfTheB)
  }

  getXY = (indexOfB, coordinates) => {
    if (indexOfB === 0) {return coordinates = "(1, 1)"}
    if (indexOfB === 1) {return coordinates = "(2, 1)"}
    if (indexOfB === 2) {return coordinates = "(3, 1)"}
    if (indexOfB === 3) {return coordinates = "(1, 2)"}
    if (indexOfB === 4) {return coordinates = "(2, 2)"}
    if (indexOfB === 5) {return coordinates = "(3, 2)"}
    if (indexOfB === 6) {return coordinates = "(1, 3)"}
    if (indexOfB === 7) {return coordinates = "(2, 3)"}
    if (indexOfB === 8) {return coordinates = "(3, 3)"}
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
  }

  getNextIndex = (direction, indexOfB) => {
    if (direction === 'left') {return this.setState({...this.state, indexOfB: -1})}
    else if (direction === 'right') {return this.setState({...this.state, indexOfB: + 1})} 
    else if (direction === 'down') {return this.setState({...this.state, indexOfB: + 4})} 
    else if (direction === 'up') {return this.setState({...this.state, indexOfB: - 4})}  
  }

  move = (evt) => {
    if (evt.target.value === 'left') {return this.moveLeft()}
    if (evt.target.value === 'right') {return this.moveLeft()}
    if (evt.target.value === 'down') {return this.moveLeft()}
    if (evt.target.value === 'up') {return this.moveLeft()}
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

  addThreeToBackOfArray = () => {
    const threeElementsArray = ['', '', '']
    const newBoard = [...this.state.board]
    newBoard.concat(threeElementsArray)
    this.setState({
      ...this.state, 
      board: newBoard
    })
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

    // this.incrementTotalMoves() /*NOT WORKING YET*/
  }

  moveLeft = () => {
    this.removeItemFromFrontOfArray()
    this.addToBackOfArray()

    // this.incrementTotalMoves() /*NOT WORKING YET*/
  }

  moveUp = () => {
    //need to remove 3 items from the beginning of the array and then add 3 items to the back of the array
    this.removeThreeItemsFromFrontOfArray() //supposed to remove 3 from beginning of array (working)
    this.addThreeToBackOfArray

    
    
    

     // this.incrementTotalMoves() /*NOT WORKING YET*/
  } 

  moveDown = () => {
    //need to add 3 items to the front of the array first and then remove 3 items from the end of the array
    this.add3ItemsToFrontOfArray()
    this.remove3ItemsFromBackOfArray()
       
    // this.incrementTotalMoves() /*NOT WORKING YET*/
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
    const newTotalMoves = [...this.state.totalMoves]
    this.setState({...this.state, totalMoves: newTotalMoves ++})
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
    const { coordinates, totalMoves, board, indexOfB, direction, message } = this.state

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
