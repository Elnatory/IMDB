import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Todo() {
    const [task, settask] = useState("");
    const [New, setNew] = useState([]);

    function addTask(event) {
        settask(event.target.value);
    }
    function addNew(e) {
        setNew([...New, task]);
        settask("");
    }
    function deleteTask(ele) {
        ele = [];
    }
    // console.log(task);
    return (
        <>
            <div className="task-list Containerfluid bg-primary p-5 text-white">
                <h1>To-Do App!</h1>
                <p>Add New To-Do</p>
                <Row className="mb-3">
                    <Form.Group as={Col} className='col-12'>
                        <Form.Control id='task' type="text" placeholder="Enter new task" name='task' value={task} onChange={(event) => { addTask(event) }} />
                    </Form.Group>
                </Row>
                <button className='bg-transparent text-white border-white' onClick={(e) => { addNew(e) }}>Add</button>
            </div>

            <ul>
                {New.map((ele, index) => (
                    <li key={index}> {ele} <button onClick={() => { deleteTask(ele) }}>Delete</button> <button>Compelete</button></li>
                ))}
            </ul>

        </>
    );
}

export default Todo;

