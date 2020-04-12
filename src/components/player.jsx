import React from 'react';

function Player(props) {
  const { left, top, position } = props;
  // TODO: tooltip for players {role, hitting responsibility}

  return (
    <div
      className={generateClassNames(position)}
      style={generateStyles(left, top)}
    >
      {position}
    </div>
  );
}

function generateClassNames(position) {
  let classes = 'player';
  if (position === 'L') classes += ' player--libero';

  return classes;
}

function generateStyles(left, top) {
  return {
    left: left + '%',
    top: top + '%',
  };
}

export default Player;