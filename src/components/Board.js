import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Knight from './Knight';
import Square from './Square';

export default class Board extends Component {

  renderSquare(x, y) {
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition
    const piece = (x === knightX && y === knightY) ? <Knight /> : null;

    return (
      <Square black={black}>
        {piece}
      </Square>
    )
  }

  render() {
    return (
      <div style={{
          width: '100%',
          height: '100%'
        }}>
        {this.renderSquare(0, 0)}
        {this.renderSquare(0, 1)}
        {this.renderSquare(0, 2)}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired).isRequired
}
