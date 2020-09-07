import React from 'react';

import './introduction.styles.scss'

const Introduction = () => (
  <div className="introduction">
    <h2 className="animate__animated animate__bounce animate__repeat-2">
      {`Hi, I'm Afeez, an aspiring Full Stack Web Developer`}
    </h2>
    <p> {`The mission: To handle all the works of Databases, Servers and Clients`} </p>
  </div>
);

export default Introduction;