import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const NoFoundData = ({ errorMessage }) => {
    return (
        <div className="container mt-2">
        <div className="alert alert-danger text-center">
            <div>
                <span className="material-icons" style={{fontSize: '48px'}}>
                    <FontAwesomeIcon icon={faCircleExclamation} className="icon" />
                </span>
            </div>
            {errorMessage}
        </div>
    </div>
    )
}

export default NoFoundData