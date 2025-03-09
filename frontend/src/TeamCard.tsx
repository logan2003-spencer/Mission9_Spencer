import React from 'react';

interface TeamCardProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ school, name, city, state }) => {
  return (
    <div className="team-card">
      <h2>{school}</h2>
      <p><strong>Team Name:</strong> {name}</p>
      <p><strong>Location:</strong> {city}, {state}</p>
    </div>
  );
};

export default TeamCard;



