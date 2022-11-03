import React, { useContext } from 'react';
import { FaGithub, FaGoogle,FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNave = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(results => {
            // console.log(results.user)
            alert('your google login success')
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <ButtonGroup className='w-100' vertical>
                <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2'><FaGoogle /> Login with google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNave;