import React from 'react'
import Square from './Square';

const style = {
    border: '4px solid darkgreen',
    marginTop: '3em',
    borderRadius: '10px',
    width: '250px',
    height: '200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)' // makes a 3 * 3 board
}


const Board = ({ squares, onClick}) => {
  return (
    <div style={style}>
    {squares.map((square, index) => (
        <Square 
        key={index}
        value={square}
        onClick={()=> {onClick(index)}} />
    )        
    )}

    </div>
  )
}

export default Board;
