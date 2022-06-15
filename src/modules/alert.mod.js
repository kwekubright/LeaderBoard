import { RenderElement } from "./render.mod";

export class Alert { 

  static alert(message, type) { 
    let alert =
      `
      <div class="alert alert-${type} flex flex-justify-center" role="alert">
        <p>${message}</p>
      </div>
      `;

    return alert;
  }

  static displayAlert(message, type) {
    this.hideAlert();
    let alert = this.alert(message, type);
    let parent = document.querySelector('#alert-container');
    const renderElement = new RenderElement(alert, parent);
    renderElement.render();

    setTimeout(() => {
      this.hideAlert();
    }, 8000);

  }

  static hideAlert() { 
    let alertContainer = document.querySelector('#alert-container');
    alertContainer.innerHTML = '';
  }
}