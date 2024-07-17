import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Learning Ease Pro</h1>
            <nav>
                <ul style={navStyleList}>
                    <li style={navItemStyle}><a href='/'>Home</a></li>
                    <li style={navItemStyle}><a href='/about'>About</a></li>
                    <li style={navItemStyle}><a href='/contact'>Contact</a></li>
                    <li style={navItemStyle}><a href='/addcourse'>Add Course</a></li>
                    <li style={navItemStyle}><a href='/facultydetails'>Faculty Details</a></li>
                    <li style={navItemStyle}><a href='/studentdetails'>Student Details</a></li>
                    <li style={navItemStyle}><a href='/coursedetails'>Course Details</a></li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#4CAF50',
    padding: '10px',
    color: 'white',
    textAlign: 'center'
}

const navStyleList = {
    listStyleType: 'none',
    margin: 0,
    padding: 0, 
    overflow: 'hidden'
}

const navItemStyle = {
    float: 'left',
    padding: '0 10px'
}

export default Header;
