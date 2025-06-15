import { useState } from "react"

export default function Form() {
    const [name,setName]=useState("");
    return (
        <>
            <div>Login Form</div>
            <label htmlFor="name">Name</label>
            <input placeholder="Enter Name" value={name} onChange={(event)=>setName(event.target.value)} id="name" />
        </>
    )
}