import React, { useState } from 'react'

const MultipleForms = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
    });

    function handleInputChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);


        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        }
        )
    }
    return (
        <>
            <form onSubmit={(event)=>{
                  event.preventDefault();
                  console.log(formData);
                  
            }}>
                <div>Multiple Fields</div>
                <label htmlFor='firstName'>First Name</label>
                <br />
                <input id='firstName' name='firstName' value={formData.firstName} onChange={handleInputChange} />
                <br />
                <label htmlFor='lastName' >Last Name</label>
                <br />
                <input id='lastName' name='lastName' value={formData.lastName} onChange={handleInputChange} />
                <br />
                <label htmlFor='age'>Age</label>
                <br />
                <input id='age' type='number' min={1} max={120} name='age' value={formData.age} onChange={handleInputChange} />
                <br />
                <button type='submit' onClick={() => { }}>Submit</button>
            </form>
        </>
    )
}

export default MultipleForms