import React, { useState } from 'react'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const Create = ({ addContent }) => {
    const [title, setTitle] = useState('');
    const [username, setUsername] = useState('');
    const [contant, setContant] = useState('');
    const nav = useNavigate()
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Username:</InputGroup.Text>
                <FormControl
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={(e) => { setUsername(e.target.value) }}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Title:</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={(e) => { setTitle(e.target.value) }}
                />
            </InputGroup>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Content:</InputGroup.Text>
                <Form.Control
                    as="textarea"
                    style={{ height: '50px' }}
                    onChange={(e) => { setContant(e.target.value) }}
                />
            </InputGroup>
            <br />
            <Button
                variant="success"
                size="lg"
                onClick={(e) => {
                    e.preventDefault();
                    addContent(uuidv4(), username, title, contant, new Date());
                    nav('/show')
                }}
            >
                Create a post</Button>{' '}
        </>
    )
}
export default Create