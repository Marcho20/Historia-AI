import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Teacher.css";
import Subject from "./subject";
import Students from "./students";

import { useState } from "react";

function Teacher() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isStudentsModalOpen, setIsStudentsModalOpen] = useState(false);

    return (
        <div>
            <div className="sidebar">
                <div className="logo">
                    <img src="./images/BereanLogo.jpg" alt="Logo" />
                </div>
                <ul>
                    <li><button>Dashboard💻</button></li>
                    <li><button onClick={() => setIsModalOpen(true)}>Subjects📚</button></li>
                    <li><button onClick={() => setIsStudentsModalOpen(true)}>Students👨‍🎓👩‍🎓</button></li>
                    <li><button>Activity🗳️</button></li>
                    <li><button>Logout📤</button></li>
                </ul>
            </div>
            <div className="main-content">
                <div className="header">
                    <div className="user-info">
                        <h2>Allen Kelly</h2>
                        <p>Teacher</p>
                    </div>
                </div>
                <div className="content">
                    <div className="card total-students">
                        <h3>Total of Students</h3>
                        <p>2</p>
                    </div>
                    <div className="card activity">
                        <h3>Activity</h3>
                        <p>No current activities</p>
                    </div>
                    <div className="card students">
                        <h3>Students</h3>
                        <div className="student-list">
                            <p>Cedrick Bruza - Grade 2 - AP</p>
                            <p>Sari Allen - Grade 2 - AP</p>
                        </div>
                    </div>
                    <div className="card calendar">
                        <h3>Calendar</h3>
                        {/* Add calendar content here */}
                    </div>
                    <div className="card todo-list">
                        <h3>To do List</h3>
                        {/* Add todo list content here */}
                    </div>
                </div>
            </div>

            <Subject 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
            <Students 
                isOpen={isStudentsModalOpen} 
                onClose={() => setIsStudentsModalOpen(false)} 
            />
        </div>
    );
}

export default Teacher;




