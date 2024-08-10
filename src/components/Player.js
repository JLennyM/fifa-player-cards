import React from 'react';
import Card from 'react-bootstrap/Card';
import './PlayerList.css'; // Import CSS for shared styles

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card className="player-card">
      <Card.Img variant="top" src={imageURL} />
      <Card.Body className="player-card-body">
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
