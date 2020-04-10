import React from 'react';

function Player(props) {
  const { left, top, position } = props;
  // TODO: tooltip for players {role, hitting responsibility}

  function generateStyles() {
    return {
      left: left + '%',
      top: top + '%',
    };
  }

  return (
    <div
      className='player'
      style={generateStyles()}
    >
      {position}
    </div>
  );
}

export default Player;