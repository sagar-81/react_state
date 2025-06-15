import React, { useState } from 'react';

function generateRandomNum(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

const Lottery = () => {
    const [num, setNum] = useState(generateRandomNum(4));

    let isWinner = sum(num) === 15;


    return (
        <>
            <h3>{isWinner ? "🎉 Congratulations, you won!" : "Try your luck 😎– Buy Lottery"}</h3>
            <p>
                Lottery Ticket = {num.map((e, i) => (
                    <span key={i}>{e} </span>
                ))}
            </p>

            <button onClick={() => setNum(generateRandomNum(4))}>Buy new Tickets</button>
        </>
    );
};

export default Lottery;