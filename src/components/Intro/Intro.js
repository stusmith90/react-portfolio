import React from 'react';

import './Intro.scss';

const intro = () => (
    <div className="Intro">
      <h3 className="Intro__heading font--bold">I am a Full Stack Developer (front-end) with over 4 years of building websites and web apps.</h3>
      <ul className="Intro__list">
        <li className="Intro__list-item">Experience with Drupal 8 including theming(Twig, Javascript - ES6) and building custom PHP modules</li>
        <li className="Intro__list-item">Building touchscreen apps in React and websites in Gatsby</li>
        <li className="Intro__list-item">Responsive web development (HTML5, CSS3)</li>
        <li className="Intro__list-item">Other Skills: HTML Grid, flexbox, SASS, GIT, OO PHP, Photoshop</li>
        <li className="Intro__list-item">Dev ops - Docker, Vagrant, SOLR, AWS, Nginx and Bitbucket Pipelines</li>
      </ul>
    </div>
);

export default intro;
