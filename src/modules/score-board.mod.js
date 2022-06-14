export let scoreBoardSection = () => {
  let scoreBoard =
    `
    <div class="score-board">
      <div class="score-board-container flex">
      <!-- Score Board -->
        <div class="score-board-content flex-basis-50">
          <div class="title-wrap margin-bottom-3 flex flex-justify-space-between flex-align-center">
            <div class="score-board-title">
                <h2>Recent scores</h2>
            </div>
            <div class="refresh-btn-wrap">
              <button class="button">Refresh</button>
              </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>Team 1: 100</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Team 2: 90</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Team 3: 80</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Team 4: 70</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Team 5: 60</p>
                </td>
              </tr>
              <tr>
            </tbody>
          </table>
        </div>
        <!-- Add Score  -->
        <div class="add-score-content flex-basis-50">
            <div class="add-score-title margin-bottom-3">
              <h2>Add Score</h2>
            </div>
            <div class="add-score-content">
              <div class="add-score-content-container">
                <form>
                  <div class="add-score-content-container-form ">
                    <div class="add-score-content-container-form-input margin-bottom-3">
                      <input type="text" id="team-name" name="team-name" placeholder="Team Name">
                    </div>
                    <div class="add-score-content-container-form-input">
                      <input type="text" id="team-score" name="team-score" placeholder="Team Score">
                    </div>
                  </div>
                  <div class="add-score-content-container-form-btn margin-top-3 flex flex-justify-right">
                    <button class="button width-25">Submit</button>
                  </div>
                </form>
              </div>
            </div>
        </div>        
      </div>
    </div>
    `;

  return new DOMParser().parseFromString(scoreBoard, 'text/html').body.firstChild;
}