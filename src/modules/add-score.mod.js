/* eslint-disable no-unused-vars */
import { Services } from "./services.mod";
import { loadScoreBoardFromService, RenderElement } from "./render.mod";
import { Alert } from "./alert.mod";

const appendNewScoreToScoreBoard = (teamName, score) => {
  let parent = document.querySelector('#load-scores');
  let resultHtml =
    `
  <tr>
    <td>
      <p>${teamName}: ${score}</p>
    </td>
  </tr>
  `;
  const renderElement = new RenderElement(resultHtml, parent);
  renderElement.render();
}

export const processAddScoreForm = (teamName, score) => {
  Services.addGameScore(teamName, score).then(apiResponse => {
    if (apiResponse.result === "Leaderboard score created correctly.") { 
      Alert.displayAlert(apiResponse.result, "success");
      loadScoreBoardFromService();
    }
  }, error => { 
    console.log(error);
  });
}