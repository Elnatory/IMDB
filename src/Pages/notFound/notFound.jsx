import React from 'react';
import './notFound.css';

const NotFound = () => {
    return (
        <div class="container-fluid background">
            <div class="row">
                <div class="col-md-12">
                    <div class="error-template">
                        <h1 className='fs-1 text-info'>
                            Oops!</h1>
                        <h2 className='fs-1 text-info'>
                            Not Found</h2>
                        <div class="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div class="error-actions">
                            <a href="http://www.jquery2dotnet.com" class="btn btn-primary btn-lg">
                                Take Me Home
                            </a>
                            <a href="http://www.jquery2dotnet.com" class="btn btn-lg text-secondary">
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NotFound;
