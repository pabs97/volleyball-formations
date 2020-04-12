import React from 'react';

function Player(props) {
  const { left, top, position } = props;
  // TODO: tooltip for players {role, hitting responsibility}

  return (
    <div
      className='player'
      style={generateStyles(left, top)}
    >
      {position}
    </div>
  );
}

function generateStyles(left, top) {
  return {
    left: left + '%',
    top: top + '%',
  };
}

export default Player;