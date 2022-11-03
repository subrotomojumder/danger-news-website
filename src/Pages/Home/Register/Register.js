import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';

function Register() {
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, emailVerify } = useContext(AuthContext);
    useTitle('register')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(results => {
                setError('');
                form.reset();
                handleUpdateUserprofile(name, photoURL);
                handleEmailVerification();
                toast.success('please check your inbox and verified your account');
            })
            .catch(e => {
                setError(e.message)
            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleUpdateUserprofile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    const handleEmailVerification = () => {
        emailVerify()
            .then(() => { })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
            <h2 className='text-primary'>Please Register</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='photoURL' type='text' placeholder="Enter photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleAccepted}
                    type="checkbox"
                    label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
        </Form>
    );
}

export default Register;