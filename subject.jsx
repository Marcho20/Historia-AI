import React from 'react';
import './subject.css';

function Subject({ isOpen, onClose }) { 
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Subject List</h2>
                <table className="subject-table">
                    <thead>
                        <tr>
                            <th>Section</th>
                            <th>Grade Level</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A</td>
                            <td>Grade 7</td>
                            <td>Mathematics</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Subject;
