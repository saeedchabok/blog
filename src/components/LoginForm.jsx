import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap'
const LoginForm = ({ showlogin, hidedenmodel }) => {
    const nav = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const login = () => {
        nav('/')
    }
    return (
        <Modal
            show={showlogin}
            onHide={() => hidedenmodel(false)}
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Log-In
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        size="lg"
                        variant="primary"
                        onClick={(e) => {
                            console.log(e);
                            login();
                        }}
                    >
                        Log-in
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
export default LoginForm