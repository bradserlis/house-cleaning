import React from 'react';

const Services = () => {
  return(
    <div className="services-container">
      <h2>Services</h2>
      <div className="services-block">
        <ul>
          <li> <span className="emoji" role="img" aria-label="diamond">💎</span>30+ Years of Experience </li>
          <li> <span className="emoji" role="img" aria-label="broom">🧹</span> All Supplies and Equipment Provided </li>
          <li> <span className="emoji" role="img" aria-label="house">🏠</span> General House Cleaning</li>
          <li> <span className="emoji" role="img" aria-label="box">📦</span> Move Out Cleaning</li>
          <li> <span className="emoji" role="img" aria-label="sparkle">✨</span> Windows and Screens Cleaning (Single Story)</li>
          <li> <span className="emoji" role="img" aria-label="calendar-week">📅</span> Weekly</li>
          <li> <span className="emoji" role="img" aria-label="calendar-week-flip">📆</span> BiWeekly</li>
          <li> <span className="emoji" role="img" aria-label="calendar-month">🗓</span> Monthly</li>
        </ul>        
      </div>
    </div>
  )
}

export default Services;
