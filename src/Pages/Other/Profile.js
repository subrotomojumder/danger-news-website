import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);
    useTitle('profile')
    const handleSubmit = event => {
        event.preventDefault();
        console.log(name)
        // photoURLRef.current.focus();
        console.log(photoURLRef.current.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Your Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="PhotoURL" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;