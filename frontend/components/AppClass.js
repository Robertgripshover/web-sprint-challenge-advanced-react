import React from 'react'

//NOTES:::
  //So just a little note for myself, I think that for moving the index of B left or right 
  //you just need to add 1 to the index. BUT to go up or down, you need to add 4 to the index, 
  //becuase that is going to make it 'jump' down the line. VERY INTERESTING! 

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
}

export default class AppClass extends React.Component {

  state = {
    indexOfB: 4, 
    coordinates: '',
    message: '', 
    board: ['', '', '', '', 'B', '', '', '', ''],
    totalMoves: 0,
    direction: ''
  } 

handleClick = (direction) => {
  if(direction = 'up') {return indexOfB - 4}
  if(direction = 'down') {return indexOfB + 4}
  if(direction = 'left') {return indexOfB - 1}
  if(direction = 'right') {return indexOfB + 1}
} //9-6-22 I need to try and make sure to make the indexOfB stateful


  // //this function is not working yet VVV
  // updateIndexOfB = (board, indexOfB) => {
  //    board.map((index) => {
  //     if(index  === 0 && index === 'B') {return indexOfB = 0}
  //     else if(index  === 1 && index === 'B') {return indexOfB = 1}
  //     else if(index  === 2 && index === 'B') {return indexOfB = 2}
  //     else if(index  === 3 && index === 'B') {return indexOfB = 3}
  //     else if(index  === 4 && index === 'B') {return indexOfB = 4}
  //     else if(index  === 5 && index === 'B') {return indexOfB = 5}
  //     else if(index  === 6 && index === 'B') {return indexOfB = 6}
  //     else if(index  === 7 && index === 'B') {return indexOfB = 7}
  //     else if(index  === 8 && index === 'B') {return indexOfB = 8}      
  //    }) 

  // } //trying to make this function take the current index in the 'B' is at in the 'board'
  // //and then use that to update the indexOfB

  //this VVV getXY function is working!!
  getXY = (indexOfB, coordinates) => {
    if (indexOfB === 0) {return coordinates = "(1, 3)"}
    if (indexOfB === 1) {return coordinates = "(2, 3)"}
    if (indexOfB === 2) {return coordinates = "(3, 3)"}
    if (indexOfB === 3) {return coordinates = "(1, 2)"}
    if (indexOfB === 4) {return coordinates = "(2, 2)"}
    if (indexOfB === 5) {return coordinates = "(3, 2)"}
    if (indexOfB === 6) {return coordinates = "(1, 1)"}
    if (indexOfB === 7) {return coordinates = "(2, 1)"}
    if (indexOfB === 8) {return coordinates = "(3, 1)"}
  }//this is looking at where the B is at and returning a string stating what part of the "grid"
  //that the idx is at. I dont think that the If statement logic is set up correctly yet. 
  //this ^^^ getXY function is working!!
  //this above function is looking at what the indexOfB is and simply updating the coordinates accordingly

  
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

  getDirection = (direction, indexOfB, message) => {
    if (direction === 'right' && indexOfB < 7) {return indexOfB + 1}
    if (direction === 'right' && indexOfB === 8) {return message = 'You cannot move right more'}
    if (direction === 'left' && indexOfB > 1) {return indexOfB - 1}
    if (direction === 'left' && indexOfB === 0) {return message = 'You cannot move left more'}
    if (direction === 'up' && indexOfB > 4) {return indexOfB - 4}
    if (direction === 'up' && indexOfB < 4) {return message = 'You cannot move up more'}
    if (direction === 'down' && indexOfB < 4) {return indexOfB + 4}
    if (direction === 'down' && indexOfB > 4) {return message = 'You cannot move down more'}
  }

  goRight = () => {
    this.getDirection()
    return console.log('moving right!')
  }

  goLeft = () => {
    return console.log('moving left!')
  }

  goUp = () => {
    return console.log('moving up!')
  }

  goDown = () => {
    return console.log('moving down!')
  }

  move = (evt) => {

    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
  }
  onChange = (evt) => {
    // You will need this to update the value of the input.
  }
  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
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
          <h3 id="message">{`${this.getDirection(message)}`}</h3> {/*for some reason at the moment this message is just returning 'undefined' */}
        </div>
        <div id="keypad">
          <button onClick={() => this.handleClick()} id="left">LEFT</button>
          <button  id="up">UP</button>
          <button  id="right">RIGHT</button>
          <button  id="down">DOWN</button>
          <button  id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
