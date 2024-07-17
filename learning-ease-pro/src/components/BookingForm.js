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
            <div>
                <label>Course ID: </label>
                <input type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)}></input>
            </div>
            <div>
                <label>Course Name: </label>
                <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)}></input>
            </div>
            <div>
                <label>Faculty Name: </label>
                <input type="text" value={facultyId} onChange={(e) => setFacultyId(e.target.value)}></input>
            </div>
            <div>
                <label>Student Name: </label>
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)}></input>
            </div>
            <div>
                <label>Course Details: </label>
                <input type="text" value={courseId} onChange={(e) => setCourseDetails(e.target.value)}></input>
            </div>
            <button type="submit">Submit Course</button>
        </form>
    )

}

export default BookingForm;