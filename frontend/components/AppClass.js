import React from 'react'

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
    coordinateX: 0,
    coordinateY: 0, 
    message: '', 
    board: ['', '', '', '', '', '', '', '', ''],
    totalMoves: 0
  } 

handleTurn = (idx) => {
}

  getXY = (idx) => {
    idx === 'B' ? 'active' : ''
  }

  getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
  } //dont think I need this one
  reset = () => {
    this.setState({
      coordinateX: 0,
      coordinateY: 0, 
      message: '', 
      board: ['', '', '', '', '', '', '', '', ''],
      totalMoves: 0
    })
  }
  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
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
    const { coordinateX, coordinateY, totalMoves, board } = this.state

    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${coordinateX}, ${coordinateY})`}</h3>
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
          <button id="left">LEFT</button>
          <button id="up">UP</button>
          <button id="right">RIGHT</button>
          <button id="down">DOWN</button>
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
