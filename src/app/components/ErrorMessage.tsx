import React from 'react';

interface ErrorMessageProps {
    message: string;
    closeErrorMessage: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, closeErrorMessage }) => {
    return (
        <div className="error-message px-4 py-3 mx-4 my-3" style={{ backgroundColor: '#d3d3d3',  borderRadius: '8px' }}>
            <div className="error-message-box ">
                <p>{message}</p>
                <button className="close-button px-2 py-1 mx-2 my-1" onClick={closeErrorMessage}>Cerrar</button>
            </div>
        </div>
    );
};



export default ErrorMessage;
