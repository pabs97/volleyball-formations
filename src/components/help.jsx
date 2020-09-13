/* eslint-disable no-sparse-arrays */
import React, { useState } from 'react';

const basicText = [
  ,
  'One of the six rotations. Then serve or receive (2 or 3)',
  'Base Defense (4)',
  'Prepare Attack (8)',
  'Defense (5, 6, 7)',
  'Prepare Attack (8)',
  'Prepare Attack (8)',
  'Prepare Attack (8)',
  'Attack (9)',
  'Base Defense (4)',
];

const moreText = [
  ,
  // 1
  'One of the six base rotations',
  // 2
  'Players are stacked to get to their base defense positions quickly as soon as the ball is served',
  // 3
  'The back row middle is swapped for the libero. Only three passers (H1, H2, L). The setter is hidden. Once the ball is received, all players will move to their prepare attack positions',
  // 4
  'This formation will protect from over passes and will let the players quickly move to left/middle/right defense',
  // 5
  '1-3 blockers on the left (depending on speed of set). Back row: left side covers line, middle covers one of the deep angles not covered by the block, right side comes in to cover short',
  // 6
  '1-3 blockers in the middle (depending on speed of set). Back row: left and right come in a bit, no need to cover line; middle covers one of the deep angles',
  // 7
  '1-3 blockers on the right (depending on speed of set). Back row: right side covers line, middle covers one of the deep angles not covered by the block, left side comes in to cover short',
  // 8
  'The setter is in their setting position. The four attackers prepare for attack. The libero will position themself to cover the block.',
  // 9
  'One of the four attackers has hit, the others have moved to cover the block as best as possible. They will move to base defense next.',
];

const HelpSection = ({ level }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <p><b>Next: </b>{`${basicText[level]} `}

        <button
          className='description-box__button'
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? 'Hide Description ▲' : 'Show Description ▼'}
        </button>
      </p>
      {showDescription && <p><b>Description: </b>{moreText[level]}</p>}
    </>
  );
};

export default HelpSection;