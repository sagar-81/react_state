import React, { useEffect, useState } from 'react'

const UseEf = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        return () => {
            console.log("Trigreed")
        }
    }, [])

    return (
        <>
            Count is {count}
            <button onClick={() => {
                setCount(count + 1);
            }}>Add</button>
        </>
    )
}

export default UseEf