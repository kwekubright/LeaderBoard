import { headerSection } from './header.mod';
import { footerSection } from './footer.mod';
import { scoreBoardSection } from './score-board.mod';
import { Services } from './services.mod';

export class RenderElement {
  constructor(element, parent, position = "beforeend") {
    this.element = element;
    this.parent = parent;
    this.position = position;
  }

  render() {
    this.parent.insertAdjacentHTML(this.position, this.element);
  }
}

export const renderDocument = () => {
  const documentBody = document.querySelector('main');
  documentBody.innerHTML = '';

  let sections = [headerSection(), scoreBoardSection(), footerSection()];

  sections.forEach(section => {
    let renderElement = new RenderElement(section, documentBody);
    renderElement.render();
  });

  loadScoreBoardFromService();
}

export const loadScoreBoardFromService = () => {
  let parent = document.querySelector('#load-scores');
  Services.getGameScores().then(apiResponse => {
    const results = apiResponse.result;
    results.sort((a, b) => b.score - a.score);
    if (results.length > 0) {
      results.forEach((result, index) => {
        (index === 0) ? parent.innerHTML = "" : null;
        let award = "";
        switch (index) { 
          case 0:
            award = "🥇";
            break;
          case 1:
            award = "🥈";
            break;
          case 2:
            award = "🥉";
            break;
          default:
            award = "";
        }

        const resultHtml =
          `
        <tr>
          <td>
            <p>${award} ${result.user}: ${result.score}</p>
          </td>
        </tr>
        `;
        
        const renderElement = new RenderElement(resultHtml, parent);
        renderElement.render();
      });
    }
  }, error => { 
    console.log(error);
  });
}