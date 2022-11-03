import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h4>Here is our Terms and conditions</h4>
            <p>Go back to Register: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;