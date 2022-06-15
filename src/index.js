import { renderDocument, loadScoreBoardFromService } from './modules/render.mod';
import { processAddScoreForm } from './modules/add-score.mod';
import './styles/index.css';
import { Alert } from './modules/alert.mod';

renderDocument();

// Add event listener to the form
const addScoreForm = document.querySelector('#add-score-form');
addScoreForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const teamName = event.target.querySelector('#team-name').value;
  const score = event.target.querySelector('#team-score').value;
  processAddScoreForm(teamName, score);
  addScoreForm.reset();
});

const refreshBtn = document.querySelector('#refresh-btn');
refreshBtn.addEventListener('click', () => {
  loadScoreBoardFromService();
  Alert.displayAlert('Scoreboard refreshed', 'success');
});