import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>© 2024 Learning Ease Pro Service</p>
        </footer>
    );
};

const footerStyle = {
    backgroundStyle: '#4CAF50',
    padding: '10px',
    color: 'white',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%'
};

export default Footer;