import React from 'react';

import './TimelineCardImage.scss';

const TimelineCardImage = ( props ) => (
    <div className="TimelineCard__image">
      <img src={props.logoImage} />
    </div>
);

export default TimelineCardImage;
