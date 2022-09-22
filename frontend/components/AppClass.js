import React from 'react'
import axios from 'axios'

const PostURL = 'http://localhost:9000/api/result'

export default class AppClass extends React.Component {

  state = {
      indexOfB: 0, 
      coordinates: '',
      message: '', 
      board: ['', '', 'B', '', '', '', '', '', ''],
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

  moveRight = (indexOfB) => {
    this.setState({ ...this.state, indexOfB: indexOfB + 1})
    console.log(indexOfB)
  }

  newGetXY = () => {

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

 // ^^^ these above functions are both for making the coordiate function work, but by creating an x and y at the same time. 
  // getXY = (indexOfB, xCoordinate, yCoordinate) => {
  //   if (indexOfB === 0) {return xCoordinate === 1 && yCoordinate === 1}
  //   else if (indexOfB === 1) {return xCoordinate === 2 && yCoordinate === 1}
  //   else if (indexOfB === 2) {return xCoordinate === 3 && yCoordinate === 1}
  //   else if (indexOfB === 3) {return xCoordinate === 1 && yCoordinate === 2}
  //   else if (indexOfB === 4) {return xCoordinate === 2 && yCoordinate === 2}
  //   else if (indexOfB === 5) {return xCoordinate === 3 && yCoordinate === 2}
  //   else if (indexOfB === 6) {return xCoordinate === 1 && yCoordinate === 3}
  //   else if (indexOfB === 7) {return xCoordinate === 2 && yCoordinate === 3}
  //   else if (indexOfB === 8) {return xCoordinate === 3 && yCoordinate === 3}
  // }

  // getXYMessage = (xCoordinate, yCoordinate, coordinates) => {
  //   if (xCoordinate === 1 && yCoordinate === 1) {return coordinates = "(1, 1)"}
  //   if (xCoordinate === 2 && yCoordinate === 1) {return coordinates = "(2, 1)"}
  //   if (xCoordinate === 3 && yCoordinate === 1) {return coordinates = "(3, 1)"}
  //   if (xCoordinate === 1 && yCoordinate === 2) {return coordinates = "(1, 2)"}
  //   if (xCoordinate === 2 && yCoordinate === 2) {return coordinates = "(2, 2)"}
  //   if (xCoordinate === 3 && yCoordinate === 2) {return coordinates = "(3, 2)"}
  //   if (xCoordinate === 1 && yCoordinate === 3) {return coordinates = "(1, 3)"}
  //   if (xCoordinate === 2 && yCoordinate === 3) {return coordinates = "(2, 3)"}
  //   if (xCoordinate === 3 && yCoordinate === 3) {return coordinates = "(3, 3)"}
  // }
//^^^ these above functions are both for making the coordiate function work, but by creating an x and y at the same time. 

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

    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.


    //9-16-2022 Friday, it looks like if I could use state to update the 'board' array each time I 
    //I do 
    // array.push(array.shift()); <--- moves the first item to the last
    // array.unshift(array.pop()); <--- moves the last item to the first 
    //I could use a combo of those to make the 'B' move around the array. 
    //If I wanted the 'B' to move once I would only need to do it once, 
    //If I wanted it to go 'up' or 'down' that would need me to be moving 
    //the 'B' by 4 units. I might be able to do this by running the push 
    //and pop functions 4 times. Might have to ask about this! 

  getNextIndex = (direction, indexOfB) => {
    if (direction === 'left') {return this.setState({...this.state, indexOfB: -1})}
    else if (direction === 'right') {return this.setState({...this.state, indexOfB: + 1})} 
    else if (direction === 'down') {return this.setState({...this.state, indexOfB: + 4})} 
    else if (direction === 'up') {return this.setState({...this.state, indexOfB: - 4})}  
  }

   move = (evt) => {
   // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    evt.board.push(board.shift())
  }

  moveLeft = (board) => {
    this.setState({ ...this.state, board: evt.board.push(board.shift()) })
    console.log('Moving left!')
  }
   //might make all the 4 movers do this?
   //moves the first item to the last (moving the 'B' left)
  //this is saying, 'Uncaught TypeError: Cannot read properties of undefined (reading 'push')'
  // each time I click it

  moveRight = (evt) => {
    evt.board.unshift(board.pop())
    console.log('Moving right!')
  } //moves the last item to the first (moving the 'B' right)
   //this is saying, 'Uncaught TypeError: Cannot read properties of undefined (reading 'unshift')'
  // each time I click it

  moveUp = (evt) => {
    evt.board.push(board.shift())
    console.log('Moving up!')
  } //need to make this move to the left 4 times, (moving the 'B' left 4 times)
  //How can I make this function do it's thing 4 times?
   //this is saying, 'Uncaught TypeError: Cannot read properties of undefined (reading 'push')'
  // each time I click it

  moveDown = (evt) => {
    evt.board.unshift(board.pop())
    console.log('Moving down')
  } //need to make this move to the right 4 times, (moving the 'B' right 4 times)
   //How can I make this function do it's thing 4 times?
    //this is saying, 'Uncaught TypeError: Cannot read properties of undefined (reading 'unshift')'
  // each time I click it



  onChangeOfEmail = (evt) => {
    // You will need this to update the value of the input.
    const { value } = evt.target
    console.log(value)
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
  } //This is working! Just need to be having the x and y coordinates and the totalMoves updating dynamically


  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
    evt.preventDefault()
    this.postNewEmail()
    this.setState({...this.state, emailInput: ''})
    //This is using a post request to send the email I entered to the server
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
          <h3 id="message">{message}</h3>
        </div>
        <div id="keypad">
          <button onClick={this.moveLeft} id="left">LEFT</button>
          <button onClick={this.moveUp} id="up">UP</button>
          <button onClick={this.moveRight} id="right">RIGHT</button>
          <button onClick={this.moveDown} id="down">DOWN</button>
          <button onClick={this.reset} id="reset">reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.emailInput} onChange={this.onChangeOfEmail} id="email" type="email" placeholder="type email"></input> {/*working on this from the day2 solution video at minute 25 ALSO MORE INFO IN THE MODULE 3 GUIDED PROJECT*/} 
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
