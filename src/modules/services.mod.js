/* eslint-disable no-undef */
export class Services { 
  static getGameScores = () => { 
    return new Promise((resolve, reject) => { 
      fetch(`${process.env.API_BASE_URL}games/${process.env.GAME_ID}/scores`)
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static addGameScore = (teamName, score) => { 
    return new Promise((resolve, reject) => { 
      fetch(`${process.env.API_BASE_URL}games/${process.env.GAME_ID}/scores`, { 
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ user: teamName, score: score }) 
      })
      .then(response => response.json()) 
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}