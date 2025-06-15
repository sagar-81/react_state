import React, { useState } from 'react';

const LudoBoard = () => {
    const [board, setBoard] = useState({ red: 0, green: 0, blue: 0, yellow: 0, });
    const [arr, setArr] = useState(["No Moves"]);

    function updateBlue() {
        setBoard({ ...board, blue: board.blue += 1 });
        arr.push("Blue Moves");
        setArr([...arr]);
        console.log(arr);
    }
    function updateGreen() {
        setBoard({ ...board, green: board.green += 1 });
        arr.push("Green Moves");
        setArr([...arr]);
        console.log(arr);
    }

    function updateRed() {
        setBoard({ ...board, red: board.red += 1 });
        arr.push("Red Moves");
        setArr([...arr]);
        console.log(arr);
    }

    function updateYellow() {
        setBoard({ ...board, yellow: board.yellow += 1 });
        arr.push("Yellow Moves");
        setArr([...arr]);
        console.log(arr);
    }

    return (
        <div>
            <p>Blue Count = {board.blue}</p>
            <button onClick={updateBlue} style={{ backgroundColor: 'blue', border: 'none', padding: '10px', color: 'white', borderRadius: '6px' }}>+1</button>
            <p>red Count ={board.red}</p>
            <button style={{ backgroundColor: 'red', border: 'none', padding: '10px', color: 'white', borderRadius: '6px' }} onClick={updateRed}>+1</button>
            <p>green Count = {board.green}</p>
            <button style={{ backgroundColor: 'green', border: 'none', padding: '10px', color: 'white', borderRadius: '6px' }} onClick={updateGreen}>+1</button>
            <p>yellow Count = {board.yellow}</p>
            <button style={{ backgroundColor: 'yellow', border: 'none', padding: '10px', borderRadius: '6px' }} onClick={updateYellow}>+1</button>
            <div style={{ paddingTop: '20px' }}>{arr[arr.length - 1]}</div>
            <button type='clear' onClick={() => setArr(["No Moves"])}>Clear</button>

        </div>
    )
}

export default LudoBoard;