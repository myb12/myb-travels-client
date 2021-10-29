import React from 'react';

const CustomSpinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border " role="status" style={{ marginTop: 100, color: "#62ac1e" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default CustomSpinner;