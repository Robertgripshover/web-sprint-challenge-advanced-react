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
    indexOfB: 8, 
    coordinates: '',
    message: '', 
    board: ['B', '', '', '', '', '', '', '', ''],
    totalMoves: 0
  } 

  getXY = (indexOfB, coordinates) => {
    if (indexOfB === 0) {return coordinates = "(1,3)"}
    if (indexOfB === 1) {return coordinates = "(2,3)"}
    if (indexOfB === 2) {return coordinates = "(3,3)"}
    if (indexOfB === 3) {return coordinates = "(1,2)"}
    if (indexOfB === 4) {return coordinates = "(2,2)"}
    if (indexOfB === 5) {return coordinates = "(3,2)"}
    if (indexOfB === 6) {return coordinates = "(1,1)"}
    if (indexOfB === 7) {return coordinates = "(2,1)"}
    if (indexOfB === 8) {return coordinates = "(3,1)"}
  }//this is looking at where the B is at and returning a string stating what part of the "grid"
  //that the idx is at. I dont think that the If statement logic is set up correctly yet. 

  

  getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.

    //
  } 
  reset = () => {
    this.setState({
      indexOfB: 4,  
      message: '', 
      board: ['', '', '', '', 'B', '', '', '', ''],
      totalMoves: 0
    })
  }

    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.

  goRight = (indexOfB) => {
    this.indexOfB + 1
    console.log(indexOfB)
    return indexOfB
    
  }

  goLeft = (indexOfB) => {
    indexOfB -1
    return indexOfB
  }

  goUp = (indexOfB) => {
    indexOfB -4
    return indexOfB
  }

  goDown = (indexOfB) => {
    indexOfB + 4
    return indexOfB
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
    const { coordinates, totalMoves, board, indexOfB } = this.state

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
                <div onClick={() => this.handleTurn(idx)} key={idx} className={`square${val ? ' active' : ''}`}>{val}</div>
              ) 
          })}
           {/*need to make the squere withoutdthe be classname "square" and with the B classname "square active" and in the "square active I need to have "B" show up in 
          In the white part in between the two arrows like how the hard coded stuff is" */}
      </div>

        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button onClick={() => this.goLeft(indexOfB)} id="left">LEFT</button>
          <button onClick={() => this.goUp(indexOfB)} id="up">UP</button>
          <button onClick={() => this.goRight(indexOfB)} id="right">RIGHT</button>
          <button onClick={() => this.goDown(indexOfB)} id="down">DOWN</button>
          <button onClick={this.reset} id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
