import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useUser } from '../context/Users.context';

export default function SignUp() {

    const { input, setInput, handleSignup } = useUser();
    const [passwordMode, setPasswordMode] = useState(false);

    return (
        <div>
            <div className='signup-box'>
        
                <div className='input-box p-5'>
                    <Form className='mt-1' onSubmit={handleSignup}>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Control size='lg' type="text" placeholder="Full Name" onChange={e => setInput({ ...input, fullName: e.target.value })} required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
                            <Form.Control size='lg' type="number" placeholder="Mobile Number" onChange={e => setInput({ ...input, mobileNumber: e.target.value })} required />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
                            <Form.Control size='lg' type="email" placeholder="Email ID" onChange={e => setInput({ ...input, mail: e.target.value })} required />
                        </Form.Group>
                        <div className="pwd-container">
                            <Form.Group className="mb-2" controlId="exampleForm.ControlInput4">
                                <Form.Control size='lg' type={passwordMode ? "text" : "password"} placeholder='Password' onChange={e => setInput({ ...input, password: e.target.value })} required />
                            </Form.Group>
                           
                        </div>
                        <div className="d-grid mt-4">
                            <Button variant="primary" size="lg" type='submit'>
                                Create Account
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className='already-user'>
                    <p>Have an Account? <Link to="/login" style={{ color: 'blue', textDecoration: "none", fontWeight: 'bold' }}><sapn>Login</sapn></Link></p>
                </div>
            </div>
        </div>
    )
}