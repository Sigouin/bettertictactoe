import { useState } from "react";
import "./App.css";

type TSquare = "X" | "O";

interface ISquare {
  index: number;
  update: (i: number) => void;
  square?: TSquare;
}

const STARTING_SQUARE: TSquare = "X";

// TODO: X and O - The players
// TODO: logic to check 3 in a row
// TODO: winner
// TODO: whos turn it is stateeeeeee
// TODO: button

// {square} === props.square
function Square({ index, update, square }: ISquare) {
  return (
    <button
      onClick={() => {
        update(index);
      }}
      className="square"
    >
      {square}
    </button>
  );
}

// TSquare[] === "an array of TSquare" === Array<TSquare>

// TODO: gonna need a handleClick and onSubmit
// TODO: stop forgegtting tododos

function Board() {
  const [currentPlayer, setCurrentPlayer] = useState(STARTING_SQUARE); //TODO: BOARD? Square looks fucking weird
  const [squares, setSquares] = useState<Array<TSquare | undefined>>(
    Array(9).fill(undefined)
  );

  const updateSquare = (i: number) => {
    const newArray = squares.slice();

    if (!newArray[i]) {
      newArray[i] = currentPlayer;

      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

      setSquares(newArray);
    } else {
      alert("SEND IT");
    }
  };

  return (
    <div className="board">
      {squares.map((s, i) => {
        return <Square update={updateSquare} square={s} index={i} />;
      })}
    </div>
  );
}

export default Board;
