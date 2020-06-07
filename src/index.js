import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// The Square component renders a single <button>
class Square extends React.Component {
   // TODO: remove the constructor
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    // TODO: use onClick={this.props.onClick}
    // TODO: replace this.state.value with this.props.value
    return (
      <button
        className="square"
        onClick={() => this.setState({ value: 'X' })}
      >
        {this.state.value}
      </button>
    );
  }
}

// Boards renders 9 squares
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} />;
  }
  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game component renders a board with placeholder values
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
