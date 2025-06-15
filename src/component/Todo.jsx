import React, { useState } from 'react';
 import { Formik } from 'formik';

const Todo = () => {

    const [arr, setArr] = useState([{ text: "Apple", done: false, bold: false }]);
    const [newTodo, setNewTodo] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleOnChanged = (e) => {
        setNewTodo(e.target.value);
    }

    const AddValue = () => {
        if (editIndex !== null) {
            const updatedArr = [...arr];
            updatedArr[editIndex] = { ...updatedArr[editIndex], text: newTodo };
            setArr(updatedArr);
            setEditIndex(null);
        } else {
            setArr([...arr, { text: newTodo, done: false, bold: false, }]);
        }

        setNewTodo("");
    }

    const handleDelete = (indexToDelete) => {
        const newArr = arr.filter((_, data) => data !== indexToDelete);
        setArr(newArr);
    };

    const handleOnEdit = (indexToEdit) => {
        setNewTodo(arr[indexToEdit].text);
        setEditIndex(indexToEdit);
    };

    function handleUpperCase() {
        setArr(
            arr.map((todo) => {
                return {
                    ...todo, text: todo.text.toUpperCase(),
                };
            },)
        );
    }

    function handleOneUpperCase(i) {
        setArr(arr.map((e, index) => {
            if (index == i) {
                return { ...e, text: e.text.toUpperCase() };
            }
            return e;
        }));
    }

    const handlemarkAsDoneAll = () => {
        setArr(arr.map((e) => {
            return {
                ...e, done: true,
            }
        }))
    }

    const handlemarkAsDone = (i) => {
        setArr(arr.map((e, index) => {
            if (index == i) {
                return { ...e, done: true };
            }
            return e;
        }))
    }

    const handleBoldAll = () => {
        setArr(arr.map((e) => {
            return {
                ...e, bold: e.bold = true,
            }
        }))
    }

    return (
        <>

            <div style={{ padding: '10px' }}> Todo App  </div>
            <div>
                <input placeholder='Enter Fruit Name' value={newTodo} onChange={handleOnChanged} />
                <button onClick={AddValue}>{editIndex != null ? "Update Fruit" : "Add Fruit"}</button>
            </div>
            <ul>
                {arr.map((e, i) => (
                    <li key={i} style={{ textDecoration: e.done ? 'line-through' : 'none', fontWeight: e.bold ? "bold" : "none" }}>
                        {e.text}
                        <button onClick={() => handleDelete(i)} style={{ marginLeft: '10px' }}>
                            Delete
                        </button>
                        <button onClick={() => handleOnEdit(i)} style={{ marginLeft: '5px' }}>
                            Edit
                        </button>
                        <button onClick={() => handleOneUpperCase(i)} style={{ marginLeft: '5px' }}>
                            Upper Case
                        </button>
                        <button onClick={() => handlemarkAsDone(i)} style={{ marginLeft: '5px', }}>
                            Mark As Done
                        </button>
                    </li>
                ),)}
            </ul>
            <button onClick={handleUpperCase}>Upper Case All</button>
            <button onClick={handlemarkAsDoneAll}>Mark As Done All</button>
            <button onClick={handleBoldAll}>Mark As Bold</button>

        </>

    )
}

export default Todo