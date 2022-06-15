export let scoreBoardSection = () => {
  let scoreBoard =
    `
    <div class="score-board">
    <div id="alert-container" class="margin-bottom-3 width-50"> </div>
      <div class="score-board-container flex">
      <!-- Score Board -->
        <div class="score-board-content flex-basis-50 bg-glass bg-shadow">
          <div class="title-wrap margin-bottom-3 flex flex-justify-space-between flex-align-center">
            <div class="score-board-title">
                <h2>Recent scores</h2>
            </div>
            <div class="refresh-btn-wrap">
              <button id="refresh-btn" class="button">Refresh</button>
              </div>
          </div>
          <table>
            <tbody id="load-scores">
              <tr>
                <td>
                  <p><i>No scores at the moment</i></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Add Score  -->
        <div class="add-score-content flex-basis-50 bg-glass bg-shadow">
            <div class="add-score-title margin-bottom-3">
              <h2>Add Score</h2>
            </div>
            <div class="">
              <div class="add-score-content-container">
                <form id="add-score-form" autocomplete="off">
                  <div class="add-score-content-container-form ">
                    <div class="add-score-content-container-form-input margin-bottom-3">
                      <input type="text" id="team-name" name="team-name" maxlength="50" placeholder="Team Name" autocomplete="off"  required>
                    </div>
                    <div class="add-score-content-container-form-input">
                      <input type="number" id="team-score" name="team-score" maxlength="3" placeholder="Team Score" autocomplete="off"  required>
                    </div>
                  </div>
                  <div class="add-score-content-container-form-btn margin-top-3 flex flex-justify-right">
                    <button class="button">Submit</button>
                  </div>
                </form>
              </div>
            </div>
        </div>        
      </div>
    </div>
    `;

  return scoreBoard;
}