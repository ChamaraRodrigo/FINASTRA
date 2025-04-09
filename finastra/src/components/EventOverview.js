import React from 'react'
import './css/EventOverview.css';

function EventOverview() {
  return (
    <div className="event-overview-section container-fluid text-light py-5">
      <div className="row">
        <div className="col-md-4 text-center text-md-start">
          <h1 className="event-heading">Event<br />Overview</h1>
        </div>
        <div className="col-md-8">
          <p className="event-text">
            Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
          </p>
          <p className="event-text">
            Our forum will bring together business and technology experts, industry leaders, and visionaries to share their insights on the latest trends and challenges in the banking sector. You'll gain valuable knowledge on topics such as Generative AI, the impact of volatility, globalization challenges, persistent supply chain issues, recession threats, shifts in competitive dynamics, and evolving regulations.
          </p>
          <p className="event-text">
            Each session will delve into the implications, challenges, and opportunities these topics present, providing you with practical strategies to leverage the latest technologies and capitalize on emerging opportunities. This is a unique chance to learn from the best in the industry, stay ahead of the curve, and connect with fellow retail banking professionals.
          </p>
          <p className="event-text">
            Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking sector. Register today and secure your place at this must-attend event!
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventOverview