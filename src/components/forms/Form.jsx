import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Forms(props) {
    const [info, setinfo] = useState({
        name: "",
        email: ""
    })
    const [errors, seterrors] = useState({
        nameError: "",
        emailError: ""
    })

    function handleForm(event) {
        if (event.target.name == "name") {
            setinfo({ ...info, name: event.target.value });
            seterrors({
                ...errors, nameError: event.target.value.length == 0 ?
                    "name is required" :
                    event.target.value.length < 3 ? "name must be than 3 characters" : "",
            });
        } else if (event.target.name == "email") {
            setinfo({ ...info, email: event.target.value })
            seterrors({
                ...errors, emailError: event.target.value.length == 0 ?
                    "email is required" :
                    event.target.value.length < 3 ? "email must be than 3 characters" :
                        event.target.value.includes("@") ? "" : "Email must include @"
            });
        }
    }
    console.log(info);
    console.log(errors);

    return (
        <>
            <Form className="m-5">
                <Form.Group className="mb-3 col-4" controlId="formGroupText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className={errors.nameError ? "border-danger shadow-none" : ""} type="text" placeholder="Enter Name" name='name' onChange={(event) => { handleForm(event) }} />
                </Form.Group>
                <p style={{ color: "red" }}>{errors.nameError}</p>

                <Form.Group className="mb-3 col-4" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={(event) => { handleForm(event) }} />
                </Form.Group>
                <p style={{ color: "red" }}>{errors.emailError}</p>

                <Button variant="primary" type="submit" onClick={(event) => event.preventDefault()}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
