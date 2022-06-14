import { headerSection } from './header.mod';
import { footerSection } from './footer.mod';
import { scoreBoardSection } from './score-board.mod';

export class RenderElement {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
  }

  render() {
    this.parent.appendChild(this.element);
  }
}

export const renderDocument = (document) => {
  const documentBody = document.querySelector('main');
  documentBody.innerHTML = '';
  
  let sections = [headerSection(), scoreBoardSection(), footerSection()];

  sections.forEach(section => {
    let renderElement = new RenderElement(section, documentBody);
    renderElement.render();
  });
}