import { useEffect, useState } from 'react';
import { Bowler } from './types/bowler';

function BowlerList() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      try {
        const response = await fetch(
          'https://localhost:5000/api/BowlingLeague'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch bowlers');
        }
        const data = await response.json();
        setBowlers(data);
      } catch (error) {
        console.error('Error fetching bowlers:', error);
      }
    };

    fetchBowlers();
  }, []); // ✅ Empty dependency array ensures this runs only once

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>
                {bowler.bowlerLastName}, {bowler.bowlerFirstName}{' '}
                {bowler.bowlerMiddleInit ?? ''}{' '}
                {/* ✅ Ensures null values don't break rendering */}
              </td>
              <td>{bowler.teamName}</td> {/* ✅ Uses correct `teamName` */}
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
