import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Agenda.css';
import { motion } from 'framer-motion';

const agenda = [
    {
        time: '09:30 AM',
        tag: 'Registration',
        title: 'Registration & Welcome Coffee',
    },
    {
        time: '10:00 AM',
        title: 'Opening Remarks',
        speaker: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking',
    },
    {
        time: '10:10 AM',
        title: 'Keynote session: Digital Transformation in a Gen AI World',
        speaker: 'Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking',
    },
    {
        time: '10:30 AM',
        title: 'Decoding the Future - Transformation: The Opportunity & Time is Now',
        speaker: "Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking, Finastra",
    },
    {
        time: '11:00 AM',
        title: 'Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World',
        speaker: `Hamid Nirouzad, Managing Director - Africa, Finastra Universal Banking;
Ahmad Hamdy, Head of IT, Incolease;
Ms. Riham Ismail Kassem Muhammad, CEX Senior, FABMISR`,
    },
    {
        time: '11:30 AM',
        title: 'Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead',
        speaker: `Karim El Mourabet, Director, Finastra;
Heba Yehia, Head of Digital Products, AAIB;
Ismail Ali, CEO, CARITech;
Mohamed Elazzazy, Head of IT Governance, Al-Baraka Bank Egypt`,
    },
    {
        time: '12:00 PM',
        title: 'Coffee Break & Networking',
    },
    {
        time: '12:30 PM',
        title: 'Panel Discussion: Cost to Serve: Deliver Customer Delight',
        speaker: `Narendra Mistry, CPO, Finastra;
Shehab Moustafa, Director, Money Fellows;
Matthew Hughes, Head of FS&I, Atos;
Emad Shawky Habib Hanna, CDAO, Banque Misr`,
    },
    {
        time: '01:00 PM',
        title: 'The Essential Elements: What do you need to be "all things to all people"?',
        speaker: 'Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking',
    },
    {
        time: '01:30 PM',
        title: 'Making the case for change: The Question is How',
        speaker: 'Marwan Abouzeid, Principal Solutions Consultant, Finastra Universal Banking',
    },
    {
        time: '01:50 PM',
        title: 'Closing Remarks',
        speaker: 'Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking',
    },
    {
        time: '02:00 PM',
        title: 'Lunch',
    },
];

const ModernAgenda = () => {
    const [expanded, setExpanded] = useState(null);
    const [currentTime, setCurrentTime] = useState('');
    const [currentSection, setCurrentSection] = useState(null);
    
    // Simulate current time and highlight current section
    useEffect(() => {
        const updateCurrentTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const formattedHours = hours % 12 || 12;
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedTime = `${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
            setCurrentTime(formattedTime);

            // Find current section based on event times (demo purposes)
            // In a real app, you would compare with actual times
            const times = agenda.map(item => item.time);
            const currentIndex = Math.floor(Math.random() * agenda.length); // Simulating for demo
            setCurrentSection(currentIndex);
        };
        
        updateCurrentTime();
        const interval = setInterval(updateCurrentTime, 60000);
        
        return () => clearInterval(interval);
    }, []);

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="modern-agenda-wrapper py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="sticky-top pt-4">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="agenda-sidebar p-4"
                            >
                                <h2 className="agenda-heading mb-4">Event Schedule</h2>
                                <div className="current-time-display">
                                    <div className="time-label">Current Time</div>
                                    <div className="time-value">{currentTime}</div>
                                </div>
                                <div className="progress-container mt-4">
                                    <div className="progress-label">Event Progress</div>
                                    <div className="progress" style={{ height: '12px' }}>
                                        <div 
                                            className="progress-bar progress-bar-striped progress-bar-animated" 
                                            role="progressbar" 
                                            style={{ width: `${(currentSection / agenda.length) * 100}%` }}
                                            aria-valuenow={(currentSection / agenda.length) * 100} 
                                            aria-valuemin="0" 
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="agenda-timeline">
                            {agenda.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`agenda-item-container ${currentSection === index ? 'current-session' : ''}`}
                                >
                                    <div 
                                        className={`agenda-item ${expanded === index ? 'expanded' : ''}`}
                                        onClick={() => toggleExpand(index)}
                                    >
                                        <div className="timeline-marker"></div>
                                        <div className="agenda-time-badge">
                                            {item.time}
                                            {item.tag && (
                                                <span className="badge bg-primary ms-2">{item.tag}</span>
                                            )}
                                            {currentSection === index && (
                                                <span className="badge bg-danger ms-2 pulse-animation">Now</span>
                                            )}
                                        </div>
                                        <div className="agenda-content-card">
                                            <h3 className="agenda-title">{item.title}</h3>
                                            {item.speaker && (
                                                <motion.div 
                                                    className="agenda-speaker mt-2"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ 
                                                        opacity: expanded === index ? 1 : 0,
                                                        height: expanded === index ? 'auto' : 0
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="speaker-icon">
                                                        <i className="bi bi-person-circle"></i>
                                                    </div>
                                                    <div className="speaker-details">
                                                        {item.speaker.split(';').map((speaker, i) => (
                                                            <div key={i} className="speaker-name">{speaker.trim()}</div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                            <div className="expand-indicator">
                                                <i className={`bi ${expanded === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernAgenda;