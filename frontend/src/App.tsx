import React from 'react';
import teamsData from './CollegeBasketballTeams.json';
import TeamCard from './TeamCard.tsx';

function App() {
  return (
      <div>
          <h1>NCAA Basketball</h1>
          <h2>Get yourself acquanted with some of the best teams in the nation before the madness starts!!</h2>
          <div className="team-list">
              {/* Access the 'teams' array in the JSON */}
              {teamsData.teams.map((team, index) => (
                  <TeamCard
                      key={index}
                      school={team.school}
                      name={team.name}
                      city={team.city}
                      state={team.state}
                  />
              ))}
          </div>
      </div>
  );
}

export default App;

