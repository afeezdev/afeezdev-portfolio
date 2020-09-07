import React from 'react';

import Tilt from 'react-tilt';


import Developer from "../../assets/afeezdev.jpg";

import "./skills-and-picture.styles.scss";


const SkillAndPicture = () => (
  <div className="skills-picture">
    <div className="backend-frontend">
      <div className='skill'> {"<FrontEnd/>"} </div> 
      <p>{`Developing Web Apps and UIs that are responsives and interactive using the following tools:`}</p>
        <ul className='list-of-skills'>
          <li>HTML5 / CSS3</li>
          <li>JavaScript / ES6</li>
          <li>SASS (CSS Preprocessor)</li>
          <li>Bootstrap / Reactstrap</li>
          <li>React Js / React_Router-Dom </li>
          <li>React-Redux (State Management)</li>
        </ul>
      
    </div>
    
    <Tilt >
    <img src={Developer} alt="Developer" />
    </Tilt>
    
    <div className="backend-frontend">
      <div className='skill' >{"<BackEnd/>"}</div>
      <p>{`Server-side to create the logic to make Web Apps function properly:`}</p>
        <ul className='list-of-skills'> 
          <li>Node Js / Express Js</li>
          <li>Ajax</li>
          <li>RESTful API</li>
          <li>PostgreSQL and Mongo DB (Databases)</li>
          <li>Firebase </li>
          <li>Stripe API</li>
        </ul>
    </div>
</div>
  
);
export default SkillAndPicture; 



      