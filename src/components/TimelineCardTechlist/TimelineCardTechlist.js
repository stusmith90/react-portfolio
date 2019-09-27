import React from 'react';

import './TimelineCardTechlist.scss';

const timelineCardTechlist = ( props ) => (
  <ul className="Techlist">
    {props.techlist.map(function(tech, key){
      return <li key={key} className="Techlist__item">{tech}</li>;
    })}
  </ul>
);

export default timelineCardTechlist;
