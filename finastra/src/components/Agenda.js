import React from 'react';
import './css/Agenda.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const Agenda = () => {
    return (
        <div className="agenda-wrapper py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h2 className="agenda-heading">Agenda</h2>
                    </div>
                    <div className="col-lg-9">
                        <div className="agenda-content p-4">
                            {agenda.map((item, index) => (
                                <div key={index} className="agenda-item pb-4">
                                <div className="d-flex gap-3">
                                  <div className="agenda-time fw-bold">{item.time}</div>
                                  <div className="flex-grow-1">
                                    <div className="agenda-title fw-semibold">{item.title}</div>
                                    {item.tag && (
                                      <span className="badge bg-primary rounded-pill mt-1 agenda-badge">
                                        {item.tag}
                                      </span>
                                    )}
                                    {item.speaker && (
                                      <div className="agenda-speaker mt-1">{item.speaker}</div>
                                    )}
                                  </div>
                                </div>
                                {index !== agenda.length - 1 && <hr className="agenda-divider mt-3" />}
                              </div>
                              
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agenda;
