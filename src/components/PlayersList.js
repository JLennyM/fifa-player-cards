import React from 'react';
import Player from './Player';
import players from '../data/players';
import './PlayerList.css'; // Import the CSS file

const PlayersList = () => {
  return (
    <div className="players-container">
      {players.map((player, index) => (
        <Player key={index} {...player} className="player-card" />
      ))}
    </div>
  );
};

export default PlayersList;
