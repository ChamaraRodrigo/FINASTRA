import React from 'react';
import './css/Speakers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpeakerCard from './SpeakerCard';
import speaker1 from './images/speaker1.png';
import speaker2 from './images/speaker2.jpg';
import speaker3 from './images/speaker3.jpg';
import speaker4 from './images/speaker4.jpg';
import speaker5 from './images/speaker5.jpg';
import speaker6 from './images/speaker6.jpg';
import speaker7 from './images/speaker7.png';
import speaker8 from './images/speaker8.png';
import speaker9 from './images/speaker9.jpg';
import speaker10 from './images/speaker10.jpg';
import speaker11 from './images/speaker11.jpg';
import speaker12 from './images/speaker12.jpg';
import speaker13 from './images/speaker13.jpeg';
import speaker14 from './images/speaker14.jpg';
import speaker15 from './images/speaker15.png';

const speakers = [
  {
    name: 'Mr. Mohamed Elazzazy',
    title: 'Head of IT Governance and Change Management',
    company: 'Al-Baraka Bank Egypt',
    image: speaker1,
  },
  {
    name: 'Mr. Shehab Moustafa',
    title: 'Country Center of Excellence Director',
    company: 'Money fellows',
    image: speaker2,
  },
  {
    name: 'Mr. Marwan Abouzeid',
    title: 'Principal Solutions Consultant & Customer Value Lead, MEA & APAC',
    company: 'Finastra',
    image: speaker3,
  },
  {
    name: 'Mr. Karim El Mourabet',
    title: 'Solution Consulting Director - MEA',
    company: 'Finastra',
    image: speaker4,
  },
  {
    name: 'Ms. Siobhan Byron',
    title: 'Executive Vice President, Universal Banking',
    company: 'Finastra',
    image: speaker5,
  },
  {
    name: 'Mr. Narendra Mistry',
    title: 'Chief Product and Technology Officer, Universal Banking',
    company: 'Finastra',
    image: speaker6,
  },
  {
    name: 'Mr. Ahmed Hamdy Bahey El Din',
    title: 'Head of Information Technology',
    company: 'Fincube',
    image: speaker7,
  },
  {
    name: 'Mr. Emad Shawky Habib Hanna',
    title: 'Chief Data and Analytics Officer',
    company: 'Banque Misr',
    image: speaker8,
  },
  {
    name: 'Ms. Heba Yehia',
    title: 'Head of Digital Products',
    company: 'Arab African International Bank',
    image: speaker9,
  },
  {
    name: 'Mr. Hamid Nirouzaad',
    title: 'Managing Director – Africa',
    company: 'Finastra Universal Banking',
    image: speaker10,
  },
  {
    name: 'Mr. Rudy Kawmi',
    title: 'Managing Director – Middle East, Africa & Asia-Pacific',
    company: 'Finastra Universal Banking',
    image: speaker11,
  },
  {
    name: 'Mr. Matthew Hughes',
    title: 'Head of ESG, International Markets',
    company: 'Zoxx',
    image: speaker12,
  },
  {
    name: 'Mr. Daragh O’Byrne',
    title: 'Senior Director, Marketing, Universal Banking',
    company: 'Finastra',
    image: speaker13,
  },
  {
    name: 'Dr. Ismail Ali',
    title: 'Co-Founder and CEO of CAAFitech',
    company: '',
    image: speaker14,
  },
  {
    name: 'Ms. Riham Ismail Kassem Muhammad',
    title: 'Corporate & Supporting functions CX Manager',
    company: 'FABMISR',
    image: speaker15,
  },
];

const Speakers = () => {
  return (
    <div className="speakers-section text-center text-white py-5">
      <h2 className="mb-5">Our Speakers</h2>
      <div className="container">
        <div className="row">
          {speakers.map((speaker, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
