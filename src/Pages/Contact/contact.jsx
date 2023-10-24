import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate()
    console.log(navigate);

    const handleNavigateion = () => {
        navigate('/about')
    }
    return (
        <div>
            Contact Us
            <br />
            <button className="btn btn-danger col-2 my-5" onClick={() => { handleNavigateion() }}>Navigate to About</button>
        </div>
    );
}

export default Contact;
