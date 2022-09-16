import React from 'react'
import arrayMove from 'array.prototype.move'

export default class AppClass extends React.Component {

  constructor() {
    super()
    this.state = {
      indexOfB: 0, 
      coordinates: '',
      message: '', 
      board: ['', '', 'B', '', '', '', '', '', ''],
      totalMoves: 0,
      direction: '',
      emailInput: '',
      xCoordinate: 0,
      yCoordinate: 0
    }
  }

  getIndexOfB = () => {

  }

  moveRight = (indexOfB) => {
    this.setState({ ...this.state, indexOfB: indexOfB + 1})
    console.log(indexOfB)
  }

  //this VVV getXY function is working
  // getXY = (indexOfB, coordinates) => {
  //   if (indexOfB === 0) {return coordinates = "(1, 1)"}
  //   if (indexOfB === 1) {return coordinates = "(2, 1)"}
  //   if (indexOfB === 2) {return coordinates = "(3, 1)"}
  //   if (indexOfB === 3) {return coordinates = "(1, 2)"}
  //   if (indexOfB === 4) {return coordinates = "(2, 2)"}
  //   if (indexOfB === 5) {return coordinates = "(3, 2)"}
  //   if (indexOfB === 6) {return coordinates = "(1, 3)"}
  //   if (indexOfB === 7) {return coordinates = "(2, 3)"}
  //   if (indexOfB === 8) {return coordinates = "(3, 3)"}
  // } THIS FUNCTION IS WORKING! AFTER EXPERIMINTATTION JUST LET ME KNOW!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  getXY = (indexOfB, xCoordinate, yCoordinate) => {
    if (indexOfB === 0) {return xCoordinate === 1 && yCoordinate === 1}
    else if (indexOfB === 1) {return xCoordinate === 2 && yCoordinate === 1}
    else if (indexOfB === 2) {return xCoordinate === 3 && yCoordinate === 1}
    else if (indexOfB === 3) {return xCoordinate === 1 && yCoordinate === 2}
    else if (indexOfB === 4) {return xCoordinate === 2 && yCoordinate === 2}
    else if (indexOfB === 5) {return xCoordinate === 3 && yCoordinate === 2}
    else if (indexOfB === 6) {return xCoordinate === 1 && yCoordinate === 3}
    else if (indexOfB === 7) {return xCoordinate === 2 && yCoordinate === 3}
    else if (indexOfB === 8) {return xCoordinate === 3 && yCoordinate === 3}
  }

  getXYMessage = (xCoordinate, yCoordinate, coordinates) => {
    if (xCoordinate === 1 && yCoordinate === 1) {return coordinates = "(1, 1)"}
    if (xCoordinate === 2 && yCoordinate === 1) {return coordinates = "(2, 1)"}
    if (xCoordinate === 3 && yCoordinate === 1) {return coordinates = "(3, 1)"}
    if (xCoordinate === 1 && yCoordinate === 2) {return coordinates = "(1, 2)"}
    if (xCoordinate === 2 && yCoordinate === 2) {return coordinates = "(2, 2)"}
    if (xCoordinate === 3 && yCoordinate === 2) {return coordinates = "(3, 2)"}
    if (xCoordinate === 1 && yCoordinate === 3) {return coordinates = "(1, 3)"}
    if (xCoordinate === 2 && yCoordinate === 3) {return coordinates = "(2, 3)"}
    if (xCoordinate === 3 && yCoordinate === 3) {return coordinates = "(3, 3)"}
  }

  reset = () => {
    this.setState({
      indexOfB: 4,  
      message: '', 
      board: ['', '', '', '', 'B', '', '', '', ''],
      totalMoves: 0
    })
    console.log('resetting!')
  }

    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.

  getNextIndex = (direction) => {
    if (direction === 'left') {return this.setState({...this.state, indexOfB: - 1})}
    else if (direction === 'right') {return this.setState({...this.state, indexOfB: + 1})} 
    else if (direction === 'down') {return this.setState({...this.state, indexOfB: + 4})} 
    else if (direction === 'up') {return this.setState({...this.state, indexOfB: - 4})}  
  }

   move = (evt) => {
   // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.

  }
  onChangeOfEmail = (evt) => {
    // You will need this to update the value of the input.
    const { value } = evt.target
    this.setState({ ...this.state, emailInput: value })
  }
  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
  }

  moveBToTheRight = (evt) => {
    evt.board.move(3, 4)
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
           {/*need to make the squere withoutdthe be classname "square" and with the B classname "square active" and in the "square active I need to have "B" show up in 
          In the white part in between the two arrows like how the hard coded stuff is" */}
      </div>

        <div className="info">
          <h3 id="message">Need to get this working</h3>
        </div>
        <div id="keypad">
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button onClick={this.moveBToTheRight} id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button onClick={this.reset} id="reset">reset</button>
        </div>
        <form>
          <input value={this.state.emailInput} onChange={this.onChangeOfEmail} id="email" type="email" placeholder="type email"></input> {/*working on this from the day2 solution video at minute 25 ALSO MORE INFO IN THE MODULE 3 GUIDED PROJECT*/} 
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
