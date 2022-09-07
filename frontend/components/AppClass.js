import React from 'react'

//NOTES:::
  //So just a little note for myself, I think that for moving the index of B left or right 
  //you just need to add 1 to the index. BUT to go up or down, you need to add 4 to the index, 
  //becuase that is going to make it 'jump' down the line. VERY INTERESTING! 

//9-6-22 declaring these variables to hopefully be able to call on them below


export default class AppClass extends React.Component {

  state = {
    indexOfB: 4, 
    coordinates: '',
    message: '', 
    board: ['', '', '', '', '', '', '', '', ''],
    totalMoves: 0,
    direction: ''
  } 

  //this VVV getXY function is working
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

  handleTurn = (idx) => {
    console.log(idx)
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

  getDirection = (direction) => {
    if (direction = 'left') { return idx - 1}
    if (direction = 'right') { return idx + 1}  
    if (direction = 'down') { return idx + 4}  
    if (direction = 'up') { return idx - 4}    
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
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
          <button id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
