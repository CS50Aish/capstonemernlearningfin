import React from 'react';
import BookingForm from './BookingForm';

const MainContent = () => {
    return (
        <main style={mainContentStyle}>
            <h2>Welcome to the Home Page</h2>
            <p>This is the main content section</p>
            <BookingForm />
        </main>
    );
};

const mainContentStyle = {
    padding: '20px',
    textAlign: 'center'
};

export default MainContent;