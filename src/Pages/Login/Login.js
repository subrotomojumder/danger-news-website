import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

function Login() {
    const { signIn, setIsLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
useTitle('login')
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(results => {
                const user = results.user;
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Your email is not verified. Please verify your email')
                }
            })
            .catch(e => {
                setError(e.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
            <h2 className='text-primary'>Please Login</h2>
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
                <br />
                <small><Link>Forget password</Link></small>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;