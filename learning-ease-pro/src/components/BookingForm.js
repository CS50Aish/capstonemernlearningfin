import React, { useState } from "react";
import axios from 'axios';

const BookingForm = () => {

    const [courseId, setCourseId] = useState('');
    const [courseName, setCourseName] = useState('');
    const [facultyId, setFacultyId] = useState('');
    const [studentId, setStudentId] = useState('');
    const [courseDetails, setCourseDetails] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBooking = {
            courseId,
            courseName,
            facultyId,
            studentId,
            courseDetails
        };

        try {
            await axios.post('http://localhost:5000/coursebookings', newBooking);
            alert('Course Details Filled Successful')
        }
        catch(err){
            alert('Error while Booking Course Details');
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            
        </form>
    )

}