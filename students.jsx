import React from 'react';
import './student.css';

function Students({ isOpen, onClose }) { 
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Students</h2>
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Progress</th>
                            <th>Quiz Average</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cedrick Bruza</td>
                            <td>Grade 2</td>
                            <td>80%</td>
                            <td>80%</td>
                            <td><button className="view-btn">View</button></td>
                        </tr>
                        <tr>
                            <td>Sari Allen</td>
                            <td>Grade 2</td>
                            <td>80%</td>
                            <td>80%</td>
                            <td><button className="view-btn">View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Students;
