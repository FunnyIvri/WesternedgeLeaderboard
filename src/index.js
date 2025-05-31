const teams = require('./teams.json')
async function loadLeaderboard() {
      try {
        const response = await fetch('https://corsproxy.io/?url=https://o76fno8oxh.execute-api.eu-central-1.amazonaws.com/api/leaderboard/c6b9993b-c065-4e9d-86f5-d60b7387ac00/rankings');
        const json = await response.json();

        const tbody = document.querySelector('#leaderboardTable tbody');
        tbody.innerHTML = ''; // Clear any existing rows

        json.data.forEach(entry => {
          const attrs = entry.attributes;

          const row = document.createElement('tr');
          let scores = [attrs.match_1_score,attrs.match_2_score,attrs.match_3_score]
          scores = scores.map((num) => (num <= 0 ? 'N/A' : num))
          let teamName = `
          <span class="teamName">${attrs.number_name.slice(4)}</span>
          <span class="teamCountry">Country Unavailable</span>
          `
          
          let team = teams[parseInt(attrs.number_name.slice(0,2))]
          if(team){
            teamName=`
            <span class="teamName">${team.name}</span>
            <span class="teamCountry">${team.Country}</span>`
          }
          
          row.innerHTML = `
            <td>
                ${teamName}
            </td>
            <td>${attrs.rank}</td>
            <td>${attrs.high_score}</td>
            <td>${scores[0]}</td>
            <td>${scores[1]}</td>
            <td>${scores[2]}</td>
          `;
          tbody.appendChild(row);
        });
      } catch (error) {
        console.error('Failed to load leaderboard:', error);
      }
    }

    // Load leaderboard on page load
    window.onload = loadLeaderboard;